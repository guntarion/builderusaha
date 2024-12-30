'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  businessContext: {
    industry: string;
    businessType: string;
    businessStage: string;
    mainProducts: string;
    teamSize: number;
    monthlyRevenue: string;
  };
  challenges: {
    challenges: string[];
    otherChallenge?: string;
    goals: string[];
    otherGoal?: string;
  };
  scalingTriggers: {
    painPoints: string;
    urgentTasks: string;
    customerFeedback: string;
    missedOpportunities: string;
  };
  teamNeeds: {
    currentSkills: string[];
    missingSkills: string;
    bottlenecks: string;
    hiringBudget: string;
    shortTermGoals: string;
    mediumTermGoals: string;
    longTermGoals: string;
    successMetrics: string;
  };
  apiResponse?: {
    enhancedContext: string;
    hiringPlan: string;
    timeline?: Array<{
      title: string;
      description: string;
      date: string;
    }>;
    budget?: Array<{
      category: string;
      description: string;
      amount: string;
    }>;
  };
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    businessContext: {
      industry: '',
      businessType: '',
      businessStage: '',
      mainProducts: '',
      teamSize: 0,
      monthlyRevenue: '',
    },
    challenges: {
      challenges: [],
      goals: [],
    },
    scalingTriggers: {
      painPoints: '',
      urgentTasks: '',
      customerFeedback: '',
      missedOpportunities: '',
    },
    teamNeeds: {
      currentSkills: [],
      missingSkills: '',
      bottlenecks: '',
      hiringBudget: '',
      shortTermGoals: '',
      mediumTermGoals: '',
      longTermGoals: '',
      successMetrics: '',
    },
  });

  const [currentStep, setCurrentStep] = useState(1);

  return <FormContext.Provider value={{ formData, setFormData, currentStep, setCurrentStep }}>{children}</FormContext.Provider>;
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}
