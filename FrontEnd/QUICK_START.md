# Quick Start Guide

## Installation & Setup

1. **Navigate to FrontEnd directory**
   ```bash
   cd FrontEnd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Available Routes

### Citizen Views
- `/` - Landing/Home Page
- `/report` - Standard Issue Reporting Form
- `/emergency` - Emergency Report Screen
- `/ai-analysis` - AI Processing Screen (auto-navigated)
- `/success` - Submission Success Page (auto-navigated)
- `/track` - Track Issue Status

### Admin Views
- `/admin` - Admin Dashboard

### Volunteer Views
- `/volunteer` - Volunteer Dashboard

## Key Features to Test

### 1. Home Page
- Large action buttons for different report types
- Statistics display
- Feature highlights

### 2. Report Forms
- Standard issue reporting with categories
- Emergency reporting with high priority highlighting
- File upload functionality
- Voice note recording (UI ready)
- Location detection

### 3. AI Analysis
- Animated processing steps
- Priority detection
- Confidence scoring
- Automatic navigation to success page

### 4. Admin Dashboard
- Sidebar navigation
- Priority-based filtering
- Search functionality
- Report detail modals
- Statistics cards

### 5. Volunteer Dashboard
- Village filtering
- Issue claiming
- Progress updates
- Photo uploads
- Status tracking

## Design System Usage

### Colors
- Use Tailwind classes: `bg-primary-400`, `text-danger-500`, etc.
- See `tailwind.config.js` for full color palette

### Typography
- Display: `text-display`
- Title: `text-title`
- Subtitle: `text-subtitle`
- Body: `text-body-lg`, `text-body`, `text-body-sm`

### Components
- Buttons: `btn btn-primary`, `btn btn-secondary`, `btn btn-danger`
- Cards: `card`
- Badges: `badge badge-high`, `badge badge-medium`, `badge badge-low`
- Inputs: `input`, `textarea`
- Labels: `label`

## Next Steps

1. Connect to backend API
2. Implement actual file uploads
3. Add voice recording functionality
4. Integrate real AI analysis service
5. Add authentication for admin/volunteer dashboards
6. Connect to map service for location features

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

