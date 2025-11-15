# Smart Governance - AI-Powered Rural Emergency & Issue Reporting System

A modern, user-friendly government-citizen web portal for reporting rural issues and emergencies with AI-powered priority detection.

## 🎨 Design Features

- **Medium-tone color palette** with soft blues, greens, and neutral grays
- **No light/dark mode toggle** - balanced, clean medium theme suitable for all users
- **Large readable typography** for rural audiences
- **Rounded cards, soft shadows** with professional gov-tech styling
- **Trustworthy, calm, community-oriented** icons and illustrations
- **Simple, uncluttered layout** with clear navigation

## 📱 Screens

### Citizen Views
1. **Landing/Home Page** - Main entry point with clear call-to-actions
2. **Emergency Report Screen** - High priority reporting for floods, disasters
3. **Standard Issue Reporting Form** - General issue reporting with categories
4. **AI Analysis Screen** - Real-time AI processing with priority detection
5. **Submission Success Page** - Ticket confirmation and tracking
6. **Track Status Page** - Monitor issue progress

### Admin Views
7. **Admin Dashboard** - Government officer view with sidebar navigation, stats, and report management

### Volunteer Views
8. **Volunteer Dashboard** - Village-sorted issues with claim and progress update functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
cd FrontEnd
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

- **Primary**: Soft blue (`#1a8ea1`) - Main actions and links
- **Secondary**: Soft green (`#66bb6a`) - Success states and positive actions
- **Danger**: Red (`#f44336`) - High priority, emergencies
- **Warning**: Amber (`#ffc107`) - Medium priority, warnings
- **Neutral**: Grays (`#9e9e9e`) - Text and backgrounds

### Typography

- **Display**: 3rem, Poppins, Bold
- **Title**: 2rem, Poppins, Semibold
- **Subtitle**: 1.5rem, Poppins, Medium
- **Body**: 1rem, Inter, Regular

### Components

- Buttons: Rounded (`12px`), soft shadows
- Cards: Rounded (`16px`), soft shadows
- Badges: Rounded full, priority-based colors
- Inputs: Rounded (`12px`), focus ring on primary color

## 🔧 Key Features

### AI-Powered Priority Detection
- Automatic analysis of reports
- Voice transcription support
- Emergency detection
- Priority assignment (High/Medium/Low)
- Confidence scoring

### Priority Levels
- **High Priority** (Red): Emergencies, floods, disasters, critical issues
- **Medium Priority** (Amber): Standard issues requiring attention
- **Low Priority** (Green): Minor issues, general requests

### Reporting Categories
- Water
- Health
- Waste
- Roads
- Agriculture
- Emergency
- Other

### Multi-language Support
- English
- Telugu
- Hindi
- Auto-detect capability

## 📂 Project Structure

```
FrontEnd/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home/Landing page
│   ├── emergency/           # Emergency report page
│   ├── report/              # Standard issue report page
│   ├── ai-analysis/         # AI processing screen
│   ├── success/             # Submission success page
│   ├── track/               # Status tracking page
│   ├── admin/               # Admin dashboard
│   └── volunteer/           # Volunteer dashboard
├── components/
│   ├── Header.tsx           # Site header/navigation
│   └── PriorityBadge.tsx    # Priority badge component
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎯 User Flows

### Citizen Reporting Flow
1. User visits landing page
2. Selects "Submit an Issue" or "Emergency Report"
3. Fills out form with details, location, images/voice
4. AI analysis processes the report
5. Success page displays ticket number
6. User can track status using ticket number

### Admin Workflow
1. Login to admin dashboard
2. View stats (High/Medium/Low priority counts)
3. Filter reports by category or priority
4. View detailed report information
5. Assign to departments or update status

### Volunteer Workflow
1. Access volunteer dashboard
2. Filter by village
3. Claim available issues
4. Update progress with notes and photos
5. Mark as resolved when complete

## 🌐 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive utilities for optimal viewing on all devices.

## 🔒 Accessibility

- Large, readable fonts (minimum 16px)
- High contrast colors
- Clear focus states
- Keyboard navigation support
- Screen reader friendly

## 📝 License

Government Initiative for Rural Development

