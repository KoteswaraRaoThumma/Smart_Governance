# Language Support Implementation

## ✅ Completed Features

### 1. Language Context & Provider
- Created `contexts/LanguageContext.tsx` with full state management
- Automatic browser language detection
- LocalStorage persistence (saves user preference)
- Updates HTML `lang` attribute dynamically

### 2. Translation Files
- Complete translations for **English**, **Telugu**, and **Hindi**
- All screens and components covered
- Organized by sections (common, home, report, emergency, etc.)
- Fallback to English if translation missing

### 3. Language Switcher
- Added to Header component (desktop & mobile)
- Shows current language with native script
- Dropdown menu with all available languages
- Click outside to close functionality

### 4. Updated Components
- ✅ Header - Full translation support
- ✅ Report Page - All text translated
- ⚠️ Other pages - Need to be updated (use same pattern)

## 🔧 How to Use Translations in Pages

### Step 1: Import the hook
```typescript
import { useLanguage } from '@/contexts/LanguageContext'
```

### Step 2: Use in component
```typescript
export default function MyPage() {
  const { t, language, setLanguage } = useLanguage()
  
  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.subtitle')}</p>
    </div>
  )
}
```

### Step 3: Translation Keys
Use dot notation to access nested translations:
- `t('common.home')` - "Home" / "హోమ్" / "होम"
- `t('report.title')` - "Report an Issue" / "సమస్యను నివేదించండి" / "समस्या रिपोर्ट करें"
- `t('categories.water')` - "Water" / "నీరు" / "पानी"

## 📝 Translation Key Structure

```
common.*          - Common UI elements (buttons, labels, etc.)
home.*            - Home page content
report.*          - Report form content
categories.*      - Category names
emergency.*       - Emergency report content
priority.*        - Priority levels
aiAnalysis.*      - AI analysis screen
success.*         - Success page
track.*           - Track status page
status.*          - Status labels
admin.*           - Admin dashboard
volunteer.*       - Volunteer dashboard
```

## 🌐 Supported Languages

1. **English (en)** - Default
2. **Telugu (te)** - తెలుగు
3. **Hindi (hi)** - हिन्दी

## 🔄 How Language Switching Works

1. User clicks language button in header
2. Language menu opens showing all options
3. User selects language
4. `setLanguage()` is called
5. Context updates all components
6. LocalStorage saves preference
7. HTML lang attribute updates
8. Page automatically re-renders with new language

## 📱 Mobile Support

Language switcher is available in mobile menu:
- Tap menu icon
- Scroll to language section
- Select language
- Menu closes automatically

## 💾 Persistence

Language preference is saved to:
- `localStorage` key: `smart-governance-language`
- Persists across browser sessions
- Automatically loads on page refresh

## 🚀 Next Steps

To add translations to remaining pages:
1. Import `useLanguage` hook
2. Replace hardcoded text with `t('key')`
3. Use translation keys from `locales/translations.ts`

Example:
```typescript
// Before:
<h1>Emergency Report</h1>

// After:
const { t } = useLanguage()
<h1>{t('emergency.title')}</h1>
```

## 🐛 Troubleshooting

### Translations not showing?
1. Check that component is wrapped in `<LanguageProvider>`
2. Verify translation key exists in `translations.ts`
3. Check browser console for errors

### Language not persisting?
1. Check browser localStorage is enabled
2. Verify `localStorage.setItem()` is working
3. Check for any console errors

### Need to add a new translation?
1. Add key to all three language objects in `translations.ts`
2. Use the translation in component with `t('your.new.key')`

