import { Language } from '@/contexts/LanguageContext'

export interface Translations {
  // Common
  common: {
    home: string
    reportIssue: string
    emergency: string
    trackStatus: string
    adminLogin: string
    submit: string
    cancel: string
    search: string
    filter: string
    view: string
    close: string
    back: string
    next: string
    loading: string
    save: string
    delete: string
    edit: string
    select: string
    language: string
  }

  // Home Page
  home: {
    title: string
    tagline: string
    subtitle: string
    submitIssue: string
    submitIssueDesc: string
    trackStatus: string
    trackStatusDesc: string
    emergencyReport: string
    emergencyReportDesc: string
    aiPowered: string
    aiPoweredDesc: string
    locationBased: string
    locationBasedDesc: string
    fastResponse: string
    fastResponseDesc: string
    communityImpact: string
    issuesReported: string
    issuesResolved: string
    activeEmergencies: string
    highPriority: string
    governmentInitiative: string
  }

  // Report Form
  report: {
    title: string
    subtitle: string
    issueTitle: string
    issueTitlePlaceholder: string
    category: string
    description: string
    descriptionPlaceholder: string
    location: string
    liveLocation: string
    detectLocation: string
    villageName: string
    villageNamePlaceholder: string
    uploadImages: string
    uploadImagesDesc: string
    recordVoiceNote: string
    startRecording: string
    stopRecording: string
    recording: string
    voiceNoteDesc: string
    submitButton: string
  }

  // Categories
  categories: {
    water: string
    health: string
    waste: string
    roads: string
    agriculture: string
    other: string
  }

  // Emergency
  emergency: {
    title: string
    reportType: string
    flood: string
    heavyRains: string
    fire: string
    healthEmergency: string
    describeEmergency: string
    describeEmergencyPlaceholder: string
    addMedia: string
    warning: string
    warningText: string
    submitButton: string
  }

  // Priority
  priority: {
    high: string
    medium: string
    low: string
    criticalEmergency: string
  }

  // AI Analysis
  aiAnalysis: {
    title: string
    subtitle: string
    analyzingReport: string
    transcribingVoice: string
    detectingEmergency: string
    assigningPriority: string
    analysisResult: string
    aiConfidence: string
    emergencyDetected: string
    emergencyDetectedText: string
    aiDetectedFlood: string
    aiDetectedSerious: string
    aiDetectedStandard: string
  }

  // Success
  success: {
    title: string
    subtitle: string
    ticketNumber: string
    whatsNext: string
    nextStep1: string
    nextStep2: string
    nextStep3: string
    trackStatus: string
    submitAnother: string
    needHelp: string
    contactSupport: string
  }

  // Track
  track: {
    title: string
    subtitle: string
    enterTicketNumber: string
    ticketNumberPlaceholder: string
    statusTimeline: string
    reportDetails: string
    issue: string
    submitted: string
    assignedTo: string
    updates: string
    currentlyAt: string
  }

  // Status
  status: {
    submitted: string
    inProgress: string
    resolved: string
    pending: string
  }

  // Admin
  admin: {
    dashboard: string
    allReports: string
    highPriority: string
    mediumPriority: string
    lowPriority: string
    searchPlaceholder: string
    allPriorities: string
  }

  // Volunteer
  volunteer: {
    dashboard: string
    yourActiveIssues: string
    resolved: string
    emergencies: string
    issuesByVillage: string
    allVillages: string
    claimIssue: string
    updateProgress: string
    uploadPhoto: string
    statusUpdate: string
    progressNotes: string
    progressNotesPlaceholder: string
    uploadResolutionPhotos: string
    claimedBy: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    common: {
      home: 'Home',
      reportIssue: 'Report Issue',
      emergency: 'Emergency',
      trackStatus: 'Track Status',
      adminLogin: 'Admin Login',
      submit: 'Submit',
      cancel: 'Cancel',
      search: 'Search',
      filter: 'Filter',
      view: 'View',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      loading: 'Loading...',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      select: 'Select',
      language: 'Language',
    },
    home: {
      title: 'Report Issues. Get Faster Support.',
      tagline: 'Your trusted platform for reporting rural issues and emergencies.',
      subtitle: 'Get quick government response with AI-powered priority detection.',
      submitIssue: 'Submit an Issue',
      submitIssueDesc: 'Report water, health, waste, or road issues in your area',
      trackStatus: 'Track Issue Status',
      trackStatusDesc: 'Check the progress of your submitted reports',
      emergencyReport: 'Emergency Report',
      emergencyReportDesc: 'Floods, Disasters, Health Emergencies',
      aiPowered: 'AI-Powered',
      aiPoweredDesc: 'Automatic priority detection and smart categorization',
      locationBased: 'Location-Based',
      locationBasedDesc: 'Quick location detection for faster response',
      fastResponse: 'Fast Response',
      fastResponseDesc: 'Priority-based routing for urgent issues',
      communityImpact: 'Community Impact',
      issuesReported: 'Issues Reported',
      issuesResolved: 'Issues Resolved',
      activeEmergencies: 'Active Emergencies',
      highPriority: 'High Priority',
      governmentInitiative: 'A Government Initiative for Rural Development',
    },
    report: {
      title: 'Report an Issue',
      subtitle: 'Help us serve you better by reporting issues in your area',
      issueTitle: 'Issue Title *',
      issueTitlePlaceholder: 'Brief description of the issue',
      category: 'Category *',
      description: 'Description *',
      descriptionPlaceholder: 'Please describe the issue in detail...',
      location: 'Live Location',
      liveLocation: 'Live Location',
      detectLocation: 'Detect My Location',
      villageName: 'Or Enter Village Name',
      villageNamePlaceholder: 'Enter your village name',
      uploadImages: 'Upload Images (Optional)',
      uploadImagesDesc: 'PNG, JPG up to 10MB',
      recordVoiceNote: 'Record Voice Note (Optional)',
      startRecording: 'Start Recording',
      stopRecording: 'Stop Recording',
      recording: 'Recording...',
      voiceNoteDesc: 'Record a voice note describing your issue. Supports Telugu, Hindi, and English.',
      submitButton: 'Submit Issue Report',
    },
    categories: {
      water: 'Water',
      health: 'Health',
      waste: 'Waste',
      roads: 'Roads',
      agriculture: 'Agriculture',
      other: 'Other',
    },
    emergency: {
      title: 'Emergency Reporting',
      reportType: 'Report Type *',
      flood: 'Flood',
      heavyRains: 'Heavy Rains',
      fire: 'Fire',
      healthEmergency: 'Health Emergency',
      describeEmergency: 'Describe the Emergency *',
      describeEmergencyPlaceholder: 'Please describe the emergency situation in detail. Include any immediate risks or dangers...',
      addMedia: 'Add Images / Videos (Optional)',
      warning: 'Emergency Report',
      warningText: 'This report will be immediately forwarded to emergency response teams. For immediate danger, please also contact local authorities.',
      submitButton: 'Submit Emergency Report',
    },
    priority: {
      high: 'High Priority',
      medium: 'Medium Priority',
      low: 'Low Priority',
      criticalEmergency: 'Critical Emergency – Auto High Priority',
    },
    aiAnalysis: {
      title: 'AI Analysis in Progress',
      subtitle: "We're processing your report with AI-powered analysis",
      analyzingReport: 'Analyzing Your Report',
      transcribingVoice: 'Transcribing Voice',
      detectingEmergency: 'Detecting Emergency',
      assigningPriority: 'Assigning Priority',
      analysisResult: 'Analysis Result',
      aiConfidence: 'AI Confidence:',
      emergencyDetected: 'Emergency Detected',
      emergencyDetectedText: 'Your report has been automatically flagged as high priority and forwarded to emergency response teams.',
      aiDetectedFlood: 'AI Detected: Flood Emergency – High Priority',
      aiDetectedSerious: 'AI Detected: Serious Issue – High Priority',
      aiDetectedStandard: 'AI Detected: Standard Issue – Medium Priority',
    },
    success: {
      title: 'Report Submitted Successfully!',
      subtitle: 'Your issue has been received and is being processed',
      ticketNumber: 'Ticket Number',
      whatsNext: "What's Next?",
      nextStep1: 'Your report has been assigned to the relevant department',
      nextStep2: 'You can track the status using your ticket number',
      nextStep3: "You'll receive updates via SMS or phone call",
      trackStatus: 'Track Status',
      submitAnother: 'Submit Another Issue',
      needHelp: 'Need help or have questions?',
      contactSupport: 'Contact Support:',
    },
    track: {
      title: 'Track Issue Status',
      subtitle: 'Enter your ticket number to check the progress of your report',
      enterTicketNumber: 'Enter ticket number (e.g., SG-123456)',
      ticketNumberPlaceholder: 'Enter ticket number (e.g., SG-123456)',
      statusTimeline: 'Status Timeline',
      reportDetails: 'Report Details',
      issue: 'Issue:',
      submitted: 'Submitted:',
      assignedTo: 'Assigned To:',
      updates: 'Updates',
      currentlyAt: 'Currently at this stage',
    },
    status: {
      submitted: 'Submitted',
      inProgress: 'In Progress',
      resolved: 'Resolved',
      pending: 'Pending',
    },
    admin: {
      dashboard: 'Dashboard',
      allReports: 'All Reports',
      highPriority: 'High Priority',
      mediumPriority: 'Medium Priority',
      lowPriority: 'Low Priority',
      searchPlaceholder: 'Search by ticket or title...',
      allPriorities: 'All Priorities',
    },
    volunteer: {
      dashboard: 'Volunteer Dashboard',
      yourActiveIssues: 'Your Active Issues',
      resolved: 'Resolved',
      emergencies: 'Emergencies',
      issuesByVillage: 'Issues by Village',
      allVillages: 'All Villages',
      claimIssue: 'Claim Issue',
      updateProgress: 'Update Progress',
      uploadPhoto: 'Upload Photo',
      statusUpdate: 'Status Update *',
      progressNotes: 'Progress Notes',
      progressNotesPlaceholder: 'Describe what has been done...',
      uploadResolutionPhotos: 'Upload Resolution Photos',
      claimedBy: 'Claimed by:',
    },
  },
  
  te: {
    common: {
      home: 'హోమ్',
      reportIssue: 'సమస్యను నివేదించండి',
      emergency: 'అత్యవసరం',
      trackStatus: 'స్థితిని ట్రాక్ చేయండి',
      adminLogin: 'అడ్మిన్ లాగిన్',
      submit: 'సమర్పించండి',
      cancel: 'రద్దు చేయండి',
      search: 'శోధించండి',
      filter: 'ఫిల్టర్',
      view: 'చూడండి',
      close: 'మూసివేయండి',
      back: 'వెనక్కి',
      next: 'తరువాత',
      loading: 'లోడ్ అవుతోంది...',
      save: 'సేవ్ చేయండి',
      delete: 'తొలగించండి',
      edit: 'సవరించండి',
      select: 'ఎంచుకోండి',
      language: 'భాష',
    },
    home: {
      title: 'సమస్యలను నివేదించండి. వేగవంతమైన మద్దతు పొందండి.',
      tagline: 'గ్రామీణ సమస్యలు మరియు అత్యవసర పరిస్థితులను నివేదించడానికి మీ విశ్వసనీయ వేదిక.',
      subtitle: 'AI-శక్తివంతమైన ప్రాధాన్యత గుర్తింపుతో వేగవంతమైన ప్రభుత్వ ప్రతిస్పందనను పొందండి.',
      submitIssue: 'సమస్యను సమర్పించండి',
      submitIssueDesc: 'మీ ప్రాంతంలోని నీరు, ఆరోగ్యం, వ్యర్థాలు లేదా రహదారి సమస్యలను నివేదించండి',
      trackStatus: 'సమస్య స్థితిని ట్రాక్ చేయండి',
      trackStatusDesc: 'మీ సమర్పించిన నివేదికల పురోగతిని తనిఖీ చేయండి',
      emergencyReport: 'అత్యవసర నివేదిక',
      emergencyReportDesc: 'వరదలు, ప్రమాదాలు, ఆరోగ్య అత్యవసరాలు',
      aiPowered: 'AI-శక్తివంతం',
      aiPoweredDesc: 'స్వయంచాలక ప్రాధాన్యత గుర్తింపు మరియు స్మార్ట్ వర్గీకరణ',
      locationBased: 'స్థానం ఆధారిత',
      locationBasedDesc: 'వేగవంతమైన ప్రతిస్పందన కోసం త్వరిత స్థాన గుర్తింపు',
      fastResponse: 'వేగవంతమైన ప్రతిస్పందన',
      fastResponseDesc: 'అత్యవసర సమస్యల కోసం ప్రాధాన్యత ఆధారిత రూటింగ్',
      communityImpact: 'సంఘ ప్రభావం',
      issuesReported: 'నివేదించిన సమస్యలు',
      issuesResolved: 'పరిష్కరించిన సమస్యలు',
      activeEmergencies: 'సక్రియ అత్యవసరాలు',
      highPriority: 'అధిక ప్రాధాన్యత',
      governmentInitiative: 'గ్రామీణాభివృద్ధి కోసం ప్రభుత్వ చొరవ',
    },
    report: {
      title: 'సమస్యను నివేదించండి',
      subtitle: 'మీ ప్రాంతంలోని సమస్యలను నివేదించడంలో మాకు సహాయపడండి',
      issueTitle: 'సమస్య శీర్షిక *',
      issueTitlePlaceholder: 'సమస్య యొక్క సంక్షిప్త వివరణ',
      category: 'వర్గం *',
      description: 'వివరణ *',
      descriptionPlaceholder: 'దయచేసి సమస్యను వివరంగా వివరించండి...',
      location: 'లైవ్ స్థానం',
      liveLocation: 'లైవ్ స్థానం',
      detectLocation: 'నా స్థానాన్ని గుర్తించండి',
      villageName: 'లేదా గ్రామం పేరు నమోదు చేయండి',
      villageNamePlaceholder: 'మీ గ్రామం పేరు నమోదు చేయండి',
      uploadImages: 'చిత్రాలను అప్‌లోడ్ చేయండి (ఐచ్ఛికం)',
      uploadImagesDesc: 'PNG, JPG 10MB వరకు',
      recordVoiceNote: 'వాయిస్ నోట్ రికార్డ్ చేయండి (ఐచ్ఛికం)',
      startRecording: 'రికార్డింగ్ ప్రారంభించండి',
      stopRecording: 'రికార్డింగ్ ఆపండి',
      recording: 'రికార్డ్ అవుతోంది...',
      voiceNoteDesc: 'మీ సమస్యను వివరించే వాయిస్ నోట్ రికార్డ్ చేయండి. తెలుగు, హిందీ మరియు ఆంగ్లం మద్దతు ఇస్తుంది.',
      submitButton: 'సమస్య నివేదికను సమర్పించండి',
    },
    categories: {
      water: 'నీరు',
      health: 'ఆరోగ్యం',
      waste: 'వ్యర్థాలు',
      roads: 'రహదారులు',
      agriculture: 'వ్యవసాయం',
      other: 'ఇతర',
    },
    emergency: {
      title: 'అత్యవసర నివేదిక',
      reportType: 'నివేదిక రకం *',
      flood: 'వరద',
      heavyRains: 'భారీ వర్షాలు',
      fire: 'అగ్ని',
      healthEmergency: 'ఆరోగ్య అత్యవసరం',
      describeEmergency: 'అత్యవసర పరిస్థితిని వివరించండి *',
      describeEmergencyPlaceholder: 'దయచేసి అత్యవసర పరిస్థితిని వివరంగా వివరించండి. ఏదైనా తక్షణ ప్రమాదాలు లేదా ప్రమాదాలను ఉన్నాయి...',
      addMedia: 'చిత్రాలు / వీడియోలను జోడించండి (ఐచ్ఛికం)',
      warning: 'అత్యవసర నివేదిక',
      warningText: 'ఈ నివేదిక వెంటనే అత్యవసర ప్రతిస్పందన బృందాలకు అందించబడుతుంది. తక్షణ ప్రమాదం కోసం, దయచేసి స్థానిక అధికారులను కూడా సంప్రదించండి.',
      submitButton: 'అత్యవసర నివేదికను సమర్పించండి',
    },
    priority: {
      high: 'అధిక ప్రాధాన్యత',
      medium: 'మధ్యస్థ ప్రాధాన్యత',
      low: 'తక్కువ ప్రాధాన్యత',
      criticalEmergency: 'క్లిష్టమైన అత్యవసరం – స్వయంచాలక అధిక ప్రాధాన్యత',
    },
    aiAnalysis: {
      title: 'AI విశ్లేషణ ప్రగతిలో ఉంది',
      subtitle: 'మేము AI-శక్తివంతమైన విశ్లేషణతో మీ నివేదికను ప్రాసెస్ చేస్తున్నాము',
      analyzingReport: 'మీ నివేదికను విశ్లేషిస్తోంది',
      transcribingVoice: 'వాయిస్‌ను ట్రాన్‌స్క్రైబ్ చేస్తోంది',
      detectingEmergency: 'అత్యవసరాన్ని గుర్తిస్తోంది',
      assigningPriority: 'ప్రాధాన్యతను కేటాయిస్తోంది',
      analysisResult: 'విశ్లేషణ ఫలితం',
      aiConfidence: 'AI విశ్వాసం:',
      emergencyDetected: 'అత్యవసరం గుర్తించబడింది',
      emergencyDetectedText: 'మీ నివేదిక స్వయంచాలకంగా అధిక ప్రాధాన్యతగా గుర్తించబడింది మరియు అత్యవసర ప్రతిస్పందన బృందాలకు అందించబడింది.',
      aiDetectedFlood: 'AI గుర్తించింది: వరద అత్యవసరం – అధిక ప్రాధాన్యత',
      aiDetectedSerious: 'AI గుర్తించింది: తీవ్రమైన సమస్య – అధిక ప్రాధాన్యత',
      aiDetectedStandard: 'AI గుర్తించింది: ప్రామాణిక సమస్య – మధ్యస్థ ప్రాధాన్యత',
    },
    success: {
      title: 'నివేదిక విజయవంతంగా సమర్పించబడింది!',
      subtitle: 'మీ సమస్య స్వీకరించబడింది మరియు ప్రాసెస్ అవుతోంది',
      ticketNumber: 'టికెట్ సంఖ్య',
      whatsNext: 'తరువాత ఏమి?',
      nextStep1: 'మీ నివేదిక సంబంధిత విభాగానికి కేటాయించబడింది',
      nextStep2: 'మీరు మీ టికెట్ సంఖ్యను ఉపయోగించి స్థితిని ట్రాక్ చేయవచ్చు',
      nextStep3: 'మీరు SMS లేదా ఫోన్ కాల్ ద్వారా నవీకరణలను అందుకుంటారు',
      trackStatus: 'స్థితిని ట్రాక్ చేయండి',
      submitAnother: 'మరొక సమస్యను సమర్పించండి',
      needHelp: 'సహాయం లేదా ప్రశ్నలు అవసరమా?',
      contactSupport: 'మద్దతును సంప్రదించండి:',
    },
    track: {
      title: 'సమస్య స్థితిని ట్రాక్ చేయండి',
      subtitle: 'మీ నివేదిక పురోగతిని తనిఖీ చేయడానికి మీ టికెట్ సంఖ్యను నమోదు చేయండి',
      enterTicketNumber: 'టికెట్ సంఖ్యను నమోదు చేయండి (ఉదా., SG-123456)',
      ticketNumberPlaceholder: 'టికెట్ సంఖ్యను నమోదు చేయండి (ఉదా., SG-123456)',
      statusTimeline: 'స్థితి టైమ్‌లైన్',
      reportDetails: 'నివేదిక వివరాలు',
      issue: 'సమస్య:',
      submitted: 'సమర్పించబడింది:',
      assignedTo: 'కేటాయించబడింది:',
      updates: 'నవీకరణలు',
      currentlyAt: 'ప్రస్తుతం ఈ దశలో ఉంది',
    },
    status: {
      submitted: 'సమర్పించబడింది',
      inProgress: 'ప్రగతిలో ఉంది',
      resolved: 'పరిష్కరించబడింది',
      pending: 'పెండింగ్‌లో ఉంది',
    },
    admin: {
      dashboard: 'డాష్‌బోర్డ్',
      allReports: 'అన్ని నివేదికలు',
      highPriority: 'అధిక ప్రాధాన్యత',
      mediumPriority: 'మధ్యస్థ ప్రాధాన్యత',
      lowPriority: 'తక్కువ ప్రాధాన్యత',
      searchPlaceholder: 'టికెట్ లేదా శీర్షిక ద్వారా శోధించండి...',
      allPriorities: 'అన్ని ప్రాధాన్యతలు',
    },
    volunteer: {
      dashboard: 'స్వచ్ఛంద డాష్‌బోర్డ్',
      yourActiveIssues: 'మీ సక్రియ సమస్యలు',
      resolved: 'పరిష్కరించబడింది',
      emergencies: 'అత్యవసరాలు',
      issuesByVillage: 'గ్రామం వారీగా సమస్యలు',
      allVillages: 'అన్ని గ్రామాలు',
      claimIssue: 'సమస్యను క్లెయిమ్ చేయండి',
      updateProgress: 'పురోగతిని నవీకరించండి',
      uploadPhoto: 'ఫోటోను అప్‌లోడ్ చేయండి',
      statusUpdate: 'స్థితి నవీకరణ *',
      progressNotes: 'పురోగతి నోట్‌లు',
      progressNotesPlaceholder: 'ఏమి చేయబడిందో వివరించండి...',
      uploadResolutionPhotos: 'పరిష్కార ఫోటోలను అప్‌లోడ్ చేయండి',
      claimedBy: 'క్లెయిమ్ చేసినవారు:',
    },
  },
  
  hi: {
    common: {
      home: 'होम',
      reportIssue: 'समस्या रिपोर्ट करें',
      emergency: 'आपातकाल',
      trackStatus: 'स्थिति ट्रैक करें',
      adminLogin: 'एडमिन लॉगिन',
      submit: 'जमा करें',
      cancel: 'रद्द करें',
      search: 'खोजें',
      filter: 'फ़िल्टर',
      view: 'देखें',
      close: 'बंद करें',
      back: 'वापस',
      next: 'अगला',
      loading: 'लोड हो रहा है...',
      save: 'सहेजें',
      delete: 'हटाएं',
      edit: 'संपादित करें',
      select: 'चुनें',
      language: 'भाषा',
    },
    home: {
      title: 'समस्याएं रिपोर्ट करें। तेज सहायता प्राप्त करें।',
      tagline: 'ग्रामीण समस्याओं और आपात स्थितियों की रिपोर्ट करने के लिए आपका विश्वसनीय प्लेटफॉर्म।',
      subtitle: 'AI-संचालित प्राथमिकता पहचान के साथ त्वरित सरकारी प्रतिक्रिया प्राप्त करें।',
      submitIssue: 'समस्या जमा करें',
      submitIssueDesc: 'अपने क्षेत्र में पानी, स्वास्थ्य, कचरा या सड़क की समस्याओं की रिपोर्ट करें',
      trackStatus: 'समस्या की स्थिति ट्रैक करें',
      trackStatusDesc: 'अपनी जमा रिपोर्टों की प्रगति जांचें',
      emergencyReport: 'आपातकाल रिपोर्ट',
      emergencyReportDesc: 'बाढ़, आपदाएं, स्वास्थ्य आपातकाल',
      aiPowered: 'AI-संचालित',
      aiPoweredDesc: 'स्वचालित प्राथमिकता पहचान और स्मार्ट वर्गीकरण',
      locationBased: 'स्थान-आधारित',
      locationBasedDesc: 'तेज प्रतिक्रिया के लिए त्वरित स्थान पहचान',
      fastResponse: 'तेज प्रतिक्रिया',
      fastResponseDesc: 'जरूरी मामलों के लिए प्राथमिकता-आधारित रूटिंग',
      communityImpact: 'सामुदायिक प्रभाव',
      issuesReported: 'रिपोर्ट की गई समस्याएं',
      issuesResolved: 'हल की गई समस्याएं',
      activeEmergencies: 'सक्रिय आपातकाल',
      highPriority: 'उच्च प्राथमिकता',
      governmentInitiative: 'ग्रामीण विकास के लिए एक सरकारी पहल',
    },
    report: {
      title: 'समस्या रिपोर्ट करें',
      subtitle: 'अपने क्षेत्र में समस्याओं की रिपोर्ट करके हमारी मदद करें',
      issueTitle: 'समस्या शीर्षक *',
      issueTitlePlaceholder: 'समस्या का संक्षिप्त विवरण',
      category: 'श्रेणी *',
      description: 'विवरण *',
      descriptionPlaceholder: 'कृपया समस्या का विस्तार से वर्णन करें...',
      location: 'लाइव स्थान',
      liveLocation: 'लाइव स्थान',
      detectLocation: 'मेरा स्थान पता करें',
      villageName: 'या गांव का नाम दर्ज करें',
      villageNamePlaceholder: 'अपने गांव का नाम दर्ज करें',
      uploadImages: 'छवियां अपलोड करें (वैकल्पिक)',
      uploadImagesDesc: 'PNG, JPG 10MB तक',
      recordVoiceNote: 'वॉइस नोट रिकॉर्ड करें (वैकल्पिक)',
      startRecording: 'रिकॉर्डिंग शुरू करें',
      stopRecording: 'रिकॉर्डिंग रोकें',
      recording: 'रिकॉर्ड हो रहा है...',
      voiceNoteDesc: 'अपनी समस्या का वर्णन करने वाला वॉइस नोट रिकॉर्ड करें। तेलुगू, हिंदी और अंग्रेजी समर्थित।',
      submitButton: 'समस्या रिपोर्ट जमा करें',
    },
    categories: {
      water: 'पानी',
      health: 'स्वास्थ्य',
      waste: 'कचरा',
      roads: 'सड़कें',
      agriculture: 'कृषि',
      other: 'अन्य',
    },
    emergency: {
      title: 'आपातकाल रिपोर्टिंग',
      reportType: 'रिपोर्ट प्रकार *',
      flood: 'बाढ़',
      heavyRains: 'भारी बारिश',
      fire: 'आग',
      healthEmergency: 'स्वास्थ्य आपातकाल',
      describeEmergency: 'आपातकाल का वर्णन करें *',
      describeEmergencyPlaceholder: 'कृपया आपातकाल स्थिति का विस्तार से वर्णन करें। किसी भी तत्काल जोखिम या खतरों को शामिल करें...',
      addMedia: 'छवियां / वीडियो जोड़ें (वैकल्पिक)',
      warning: 'आपातकाल रिपोर्ट',
      warningText: 'यह रिपोर्ट तुरंत आपातकाल प्रतिक्रिया टीमों को भेजी जाएगी। तत्काल खतरे के लिए, कृपया स्थानीय अधिकारियों से भी संपर्क करें।',
      submitButton: 'आपातकाल रिपोर्ट जमा करें',
    },
    priority: {
      high: 'उच्च प्राथमिकता',
      medium: 'मध्यम प्राथमिकता',
      low: 'निम्न प्राथमिकता',
      criticalEmergency: 'महत्वपूर्ण आपातकाल – स्वचालित उच्च प्राथमिकता',
    },
    aiAnalysis: {
      title: 'AI विश्लेषण प्रगति में है',
      subtitle: 'हम AI-संचालित विश्लेषण के साथ आपकी रिपोर्ट प्रसंस्कृत कर रहे हैं',
      analyzingReport: 'आपकी रिपोर्ट का विश्लेषण कर रहा है',
      transcribingVoice: 'आवाज लिख रहा है',
      detectingEmergency: 'आपातकाल का पता लगा रहा है',
      assigningPriority: 'प्राथमिकता असाइन कर रहा है',
      analysisResult: 'विश्लेषण परिणाम',
      aiConfidence: 'AI विश्वास:',
      emergencyDetected: 'आपातकाल का पता चला',
      emergencyDetectedText: 'आपकी रिपोर्ट को स्वचालित रूप से उच्च प्राथमिकता के रूप में चिह्नित किया गया है और आपातकाल प्रतिक्रिया टीमों को भेजा गया है।',
      aiDetectedFlood: 'AI ने पता लगाया: बाढ़ आपातकाल – उच्च प्राथमिकता',
      aiDetectedSerious: 'AI ने पता लगाया: गंभीर समस्या – उच्च प्राथमिकता',
      aiDetectedStandard: 'AI ने पता लगाया: मानक समस्या – मध्यम प्राथमिकता',
    },
    success: {
      title: 'रिपोर्ट सफलतापूर्वक जमा कर दी गई!',
      subtitle: 'आपकी समस्या प्राप्त कर ली गई है और प्रसंस्करण में है',
      ticketNumber: 'टिकट संख्या',
      whatsNext: 'आगे क्या?',
      nextStep1: 'आपकी रिपोर्ट संबंधित विभाग को सौंपी गई है',
      nextStep2: 'आप अपना टिकट नंबर उपयोग करके स्थिति ट्रैक कर सकते हैं',
      nextStep3: 'आपको SMS या फोन कॉल के माध्यम से अपडेट प्राप्त होंगे',
      trackStatus: 'स्थिति ट्रैक करें',
      submitAnother: 'एक और समस्या जमा करें',
      needHelp: 'सहायता या प्रश्नों की आवश्यकता है?',
      contactSupport: 'सहायता से संपर्क करें:',
    },
    track: {
      title: 'समस्या की स्थिति ट्रैक करें',
      subtitle: 'अपनी रिपोर्ट की प्रगति जांचने के लिए अपना टिकट नंबर दर्ज करें',
      enterTicketNumber: 'टिकट संख्या दर्ज करें (उदा., SG-123456)',
      ticketNumberPlaceholder: 'टिकट संख्या दर्ज करें (उदा., SG-123456)',
      statusTimeline: 'स्थिति समयरेखा',
      reportDetails: 'रिपोर्ट विवरण',
      issue: 'समस्या:',
      submitted: 'जमा किया गया:',
      assignedTo: 'असाइन किया गया:',
      updates: 'अपडेट',
      currentlyAt: 'वर्तमान में इस चरण में',
    },
    status: {
      submitted: 'जमा किया गया',
      inProgress: 'प्रगति में',
      resolved: 'हल हो गया',
      pending: 'लंबित',
    },
    admin: {
      dashboard: 'डैशबोर्ड',
      allReports: 'सभी रिपोर्टें',
      highPriority: 'उच्च प्राथमिकता',
      mediumPriority: 'मध्यम प्राथमिकता',
      lowPriority: 'निम्न प्राथमिकता',
      searchPlaceholder: 'टिकट या शीर्षक से खोजें...',
      allPriorities: 'सभी प्राथमिकताएं',
    },
    volunteer: {
      dashboard: 'स्वयंसेवक डैशबोर्ड',
      yourActiveIssues: 'आपके सक्रिय मुद्दे',
      resolved: 'हल हो गया',
      emergencies: 'आपातकाल',
      issuesByVillage: 'गांव के अनुसार समस्याएं',
      allVillages: 'सभी गांव',
      claimIssue: 'समस्या का दावा करें',
      updateProgress: 'प्रगति अपडेट करें',
      uploadPhoto: 'फोटो अपलोड करें',
      statusUpdate: 'स्थिति अपडेट *',
      progressNotes: 'प्रगति नोट्स',
      progressNotesPlaceholder: 'क्या किया गया है इसका वर्णन करें...',
      uploadResolutionPhotos: 'समाधान फोटो अपलोड करें',
      claimedBy: 'दावा करने वाला:',
    },
  },
}

// Helper function to get nested translation
export function getTranslation(language: Language, path: string): string {
  const keys = path.split('.')
  let value: any = translations[language]
  
  try {
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        // Fallback to English if translation not found
        value = translations.en
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k]
          } else {
            return path // Return key if translation not found
          }
        }
        break
      }
    }
  } catch (error) {
    console.error(`Translation error for path: ${path}`, error)
    return path
  }
  
  return typeof value === 'string' ? value : path
}

export default translations

