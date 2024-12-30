import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { mockBusinessData } from '../data/mockData';
import { BusinessMetrics } from '../types';

export function exportToPDF(data: BusinessMetrics[]) {
  const doc = new jsPDF();

  // Add title
  doc.setFontSize(18);
  doc.text('Business Metrics Report', 10, 20);

  // Add KPI Metrics table
  doc.setFontSize(14);
  doc.text('KPI Metrics', 10, 30);
  const kpiColumns = ['Metric', 'Current', 'Target', 'Growth'];
  const kpiRows = [
    ['Revenue', data[0].kpiMetrics.revenue.current, data[0].kpiMetrics.revenue.target, data[0].kpiMetrics.revenue.growth],
    ['Customers', data[0].kpiMetrics.customers.active, 'N/A', data[0].kpiMetrics.customers.acquisitionRate],
    ['Cashflow', data[0].kpiMetrics.cashflow.balance, 'N/A', data[0].kpiMetrics.cashflow.burnRate],
  ];

  (doc as any).autoTable({
    head: [kpiColumns],
    body: kpiRows,
    startY: 35,
    theme: 'striped',
    styles: { cellPadding: 3, fontSize: 10 },
  });

  // Add Growth Metrics table
  const growthY = (doc as any).lastAutoTable.finalY + 10;
  doc.setFontSize(14);
  doc.text('Growth Metrics', 10, growthY);
  const growthColumns = ['Metric', 'Value'];
  const growthRows = [
    ['Market Share', data[0].growthMetrics.marketShare],
    ['Employee Growth', data[0].growthMetrics.employeeGrowth],
    ['Product Development', data[0].growthMetrics.productDevelopment],
    ['Customer Satisfaction', data[0].growthMetrics.customerSatisfaction],
  ];

  (doc as any).autoTable({
    head: [growthColumns],
    body: growthRows,
    startY: growthY + 5,
    theme: 'striped',
    styles: { cellPadding: 3, fontSize: 10 },
  });

  doc.save('business_metrics_report.pdf');
}

export function exportToExcel(data: BusinessMetrics[]) {
  // Prepare KPI Metrics worksheet
  const kpiData = [
    {
      'Revenue Current': data[0].kpiMetrics.revenue.current,
      'Revenue Target': data[0].kpiMetrics.revenue.target,
      'Revenue Growth': data[0].kpiMetrics.revenue.growth,
      'Active Customers': data[0].kpiMetrics.customers.active,
      'Customer Churn Rate': data[0].kpiMetrics.customers.churnRate,
      'Customer Acquisition Rate': data[0].kpiMetrics.customers.acquisitionRate,
      'Cash Balance': data[0].kpiMetrics.cashflow.balance,
      'Burn Rate': data[0].kpiMetrics.cashflow.burnRate,
      Runway: data[0].kpiMetrics.cashflow.runway,
    },
  ];

  const kpiWorksheet = XLSX.utils.json_to_sheet(kpiData);

  // Prepare Growth Metrics worksheet
  const growthData = [
    {
      'Market Share': data[0].growthMetrics.marketShare,
      'Employee Growth': data[0].growthMetrics.employeeGrowth,
      'Product Development': data[0].growthMetrics.productDevelopment,
      'Customer Satisfaction': data[0].growthMetrics.customerSatisfaction,
    },
  ];

  const growthWorksheet = XLSX.utils.json_to_sheet(growthData);

  // Create workbook and add worksheets
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, kpiWorksheet, 'KPI Metrics');
  XLSX.utils.book_append_sheet(workbook, growthWorksheet, 'Growth Metrics');

  // Write file
  XLSX.writeFile(workbook, 'business_metrics_report.xlsx');
}

export function handleExport(format: 'pdf' | 'excel') {
  const data = mockBusinessData;

  switch (format) {
    case 'pdf':
      exportToPDF(data);
      break;
    case 'excel':
      exportToExcel(data);
      break;
    default:
      console.warn('Unsupported export format:', format);
  }
}
