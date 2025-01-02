# Change Log

## [2024-01-09] Coachsultant Interface Implementation

### Fixed

- Added 'use client' directive to Sidebar component to fix usePathname hook error
- Added 'use client' directive to Header component for client-side interactivity

### Added

- Created `src/app/(protected)/coachsultant/components/layout/Sidebar.tsx` with navigation menu in Bahasa Indonesia
- Created `src/app/(protected)/coachsultant/components/layout/Header.tsx` with search bar and profile section
- Created `src/app/(protected)/coachsultant/profile-settings/page.tsx` with form fields for basic information and profile picture upload
- Created `src/app/(protected)/coachsultant/change-password/page.tsx` with password change form
- All components follow the provided design with appropriate styling and layout
- Used placeholder profile images and icons from Lucide React library
- Implemented responsive form layouts with proper validation indicators
- Added Indonesian language interface for all text and labels

## [2024-01-10] Marketing Page Enhancement

### Added

- Created `src/app/(marketing)/styles.css` with animated background gradient and geometric shapes
- Added smooth floating animations for geometric shapes using CSS keyframes
- Implemented transparent to solid header transition on scroll
- Added dynamic text color changes for header navigation on scroll

### Modified

- Updated `src/app/(marketing)/page.tsx` to include animated background and geometric shapes
- Modified `src/components/layout/marketing/Navbar.tsx` to support transparent/solid header transitions
- Enhanced header navigation with proper color transitions (white to blue) on scroll
- Added proper TypeScript types for Navbar component props

## [2024-01-10] Visual Enhancements

### Modified

- Lightened up the gradient background using brighter blue shades (#1e3a8a to #3b82f6)
- Enhanced geometric shapes visibility with increased opacity and blur effect
- Updated "Mulai Sekarang" button with light blue background, rounded corners, and persistent white text
- Changed "Dengan AI Pendamping" text to light yellow for emphasis
- Lightened the "Pelajari Lebih Lanjut" button color for better visibility
- Added symmetric geometric shapes in top-left and top-right positions
- Improved z-indexing to ensure text and content remain above the decorative shapes
- Added reverse animation for right shape to create balanced visual movement
