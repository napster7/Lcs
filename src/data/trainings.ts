
// src/data/trainings.ts
import { trainingData as aiRiskManagementProfessionals } from './training/ai-risk-management-professionals';
import { trainingData as aiForCybersecurityProfessionals } from './training/ai-for-cybersecurity-professionals';
import { trainingData as aiCybersecurityEssentials } from './training/ai-cybersecurity-essentials';

export const allTrainings: { [key: string]: any } = {
  'ai-risk-management-professionals': aiRiskManagementProfessionals,
  'ai-for-cybersecurity-professionals': aiForCybersecurityProfessionals,
  'ai-cybersecurity-essentials': aiCybersecurityEssentials,
};
