// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/canvasValidation.ts

import { LeanCanvas, CanvasField } from './canvasTypes';

export const initialCanvasState: LeanCanvas = {
  userId: '',
  fields: {
    problem: {
      id: 'problem',
      title: 'Problem',
      description: 'Masalah yang ingin Anda selesaikan',
      placeholder: 'Apa masalah utama yang ingin Anda selesaikan?',
      example: 'UKM kesulitan mengelola inventory secara akurat',
      isMandatory: true,
      value: '',
    },
    customerSegments: {
      id: 'customerSegments',
      title: 'Customer Segments',
      description: 'Target pelanggan Anda',
      placeholder: 'Siapa target pelanggan utama Anda?',
      example: 'Pemilik toko retail kecil dengan 1-5 karyawan',
      isMandatory: true,
      value: '',
    },
    valueProposition: {
      id: 'valueProposition',
      title: 'Value Proposition',
      description: 'Nilai unik yang Anda tawarkan',
      placeholder: 'Apa nilai unik yang Anda tawarkan?',
      example: 'Sistem inventory realtime tanpa perlu hardware mahal',
      isMandatory: true,
      value: '',
    },
    solution: {
      id: 'solution',
      title: 'Solution',
      description: 'Solusi yang Anda tawarkan',
      placeholder: 'Bagaimana Anda menyelesaikan masalah tersebut?',
      example: 'Aplikasi mobile dengan barcode scanning',
      isMandatory: false,
      value: '',
    },
    revenueStreams: {
      id: 'revenueStreams',
      title: 'Revenue Streams',
      description: 'Sumber pendapatan',
      placeholder: 'Bagaimana Anda menghasilkan pendapatan?',
      example: 'Subscription bulanan Rp 499k/bulan',
      isMandatory: false,
      value: '',
    },
    costStructure: {
      id: 'costStructure',
      title: 'Cost Structure',
      description: 'Struktur biaya',
      placeholder: 'Apa saja biaya utama yang diperlukan?',
      example: 'Server, marketing, customer support',
      isMandatory: false,
      value: '',
    },
    keyMetrics: {
      id: 'keyMetrics',
      title: 'Key Metrics',
      description: 'Metrik utama',
      placeholder: 'Metrik apa yang akan Anda pantau?',
      example: 'Monthly Active Users, Churn Rate',
      isMandatory: false,
      value: '',
    },
    unfairAdvantage: {
      id: 'unfairAdvantage',
      title: 'Unfair Advantage',
      description: 'Keunggulan kompetitif',
      placeholder: 'Apa keunggulan unik yang sulit ditiru?',
      example: 'Dataset inventory retail 10 tahun',
      isMandatory: false,
      value: '',
    },
    channels: {
      id: 'channels',
      title: 'Channels',
      description: 'Saluran ke pelanggan',
      placeholder: 'Bagaimana Anda menjangkau pelanggan?',
      example: 'Direct sales, online marketing',
      isMandatory: false,
      value: '',
    },
  },
  lastUpdated: new Date(),
  status: 'draft',
};
