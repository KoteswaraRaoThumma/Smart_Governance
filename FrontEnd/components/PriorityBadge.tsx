'use client'

interface PriorityBadgeProps {
  priority: 'high' | 'medium' | 'low'
  aiDetected?: boolean
  label?: string
}

export default function PriorityBadge({ priority, aiDetected = false, label }: PriorityBadgeProps) {
  const getBadgeClass = () => {
    switch (priority) {
      case 'high':
        return 'badge-high'
      case 'medium':
        return 'badge-medium'
      case 'low':
        return 'badge-low'
      default:
        return 'badge-high'
    }
  }

  const getPriorityText = () => {
    if (label) return label
    switch (priority) {
      case 'high':
        return 'High Priority'
      case 'medium':
        return 'Medium Priority'
      case 'low':
        return 'Low Priority'
      default:
        return 'High Priority'
    }
  }

  return (
    <span className={`badge ${getBadgeClass()}`}>
      {aiDetected && (
        <span className="mr-1">🤖</span>
      )}
      {getPriorityText()}
    </span>
  )
}

