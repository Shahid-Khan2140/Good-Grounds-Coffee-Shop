import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Coffee, ChevronRight, Play, Pause, RefreshCw, X, ArrowLeft } from "lucide-react";
import { brewGuides, BrewGuide, BrewStep } from "../data/brewGuides";

export default function BrewGuides() {
  const [selectedGuide, setSelectedGuide] = useState<BrewGuide | null>(null);

  return (
    <div className="min-h-screen bg-cream pt-20 pb-12 px-4 md:px-8">
      <AnimatePresence mode="wait">
        {!selectedGuide ? (
          <GuideList key="list" onSelect={setSelectedGuide} />
        ) : (
          <ActiveGuide key="guide" guide={selectedGuide} onBack={() => setSelectedGuide(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function GuideList({ onSelect }: { onSelect: (g: BrewGuide) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-espresso mb-4">Master the Brew</h1>
        <p className="text-coffee/80 text-lg max-w-2xl mx-auto">
          Explore our expert guides to brew the perfect cup, every time. Select your method below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brewGuides.map((guide, index) => (
          <motion.div
            key={guide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => onSelect(guide)}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-2 text-gold text-sm font-medium mb-2 uppercase tracking-wider">
                <Coffee className="w-4 h-4" />
                <span>{guide.difficulty}</span>
                <span className="w-1 h-1 bg-gold rounded-full" />
                <span>{guide.totalTime}</span>
              </div>
              <h3 className="text-3xl font-serif mb-2">{guide.title}</h3>
              <p className="text-white/80 line-clamp-2 mb-4 group-hover:text-white transition-colors">
                {guide.description}
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all">
                Start Brewing <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ActiveGuide({ guide, onBack }: { guide: BrewGuide; onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(guide.steps[0].duration || 0);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isActive) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);

  useEffect(() => {
    // Reset timer when step changes
    setTimeRemaining(guide.steps[currentStep].duration || 0);
    setIsActive(false);
  }, [currentStep, guide]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeRemaining(guide.steps[currentStep].duration || 0);
  };
  
  const nextStep = () => {
    if (currentStep < guide.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setIsCompleted(false);
    }
  };

  const currentStepData = guide.steps[currentStep];
  const progress = ((currentStep + 1) / guide.steps.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="max-w-4xl mx-auto h-[80vh] flex flex-col items-center justify-center"
    >
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-coffee/70 hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Guides
        </button>
        <h2 className="text-2xl font-serif text-espresso">{guide.title}</h2>
        <div className="w-24" /> {/* Spacer for centering */}
      </div>

      {!isCompleted ? (
        <div className="w-full max-w-lg bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
           {/* Progress Bar */}
           <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
            <motion.div 
                className="h-full bg-accent" 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
           </div>

           <div className="flex justify-between text-sm text-coffee/50 font-medium tracking-widest uppercase mb-8 mt-4">
             <span>Step {currentStep + 1} of {guide.steps.length}</span>
             {currentStepData.duration ? <span>Timer: {currentStepData.duration}s</span> : <span>Action</span>}
           </div>

           <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-serif text-espresso mb-6 leading-tight">
                {currentStepData.instruction}
              </h3>
              
              {currentStepData.duration ? (
                  <div className="flex flex-col items-center">
                    <div className="text-6xl font-mono font-bold text-accent mb-8">
                       {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                    </div>
                    <div className="flex gap-4">
                         <button 
                            onClick={toggleTimer} 
                            className={`p-4 rounded-full text-white transition-all ${isActive ? 'bg-orange-400 hover:bg-orange-500' : 'bg-green-500 hover:bg-green-600'}`}
                         >
                            {isActive ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}
                         </button>
                         <button onClick={resetTimer} className="p-4 rounded-full bg-gray-200 text-coffee hover:bg-gray-300 transition-colors">
                            <RefreshCw className="w-6 h-6" />
                         </button>
                    </div>
                  </div>
              ) : (
                  <div className="py-12 flex justify-center text-accent/20">
                    <Coffee className="w-32 h-32" />
                  </div>
              )}
           </div>

           <div className="flex justify-between items-center pt-8 border-t border-gray-100">
               <button 
                onClick={prevStep} 
                disabled={currentStep === 0}
                className="text-coffee/50 hover:text-coffee disabled:opacity-30 font-medium px-4 py-2"
               >
                 Previous
               </button>
               <button 
                onClick={nextStep}
                className="bg-espresso text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-coffee transition-all flex items-center gap-2"
               >
                  {currentStep === guide.steps.length - 1 ? 'Finish' : 'Next Step'} <ChevronRight className="w-4 h-4" />
               </button>
           </div>
        </div>
      ) : (
        <div className="w-full max-w-lg bg-white p-12 rounded-3xl shadow-2xl text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-serif text-espresso mb-4">Enjoy your Coffee!</h3>
            <p className="text-coffee/70 mb-8">You've mastered the {guide.title}.</p>
            <button 
                onClick={onBack}
                className="btn btn-primary w-full"
            >
                Brew Another
            </button>
        </div>
      )}
    </motion.div>
  );
}
