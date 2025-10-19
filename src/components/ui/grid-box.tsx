import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export type GridBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  tags?: Array<{ icon?: React.ReactNode; text?: React.ReactNode }>
  motionProps?: Partial<{
    initial: any
    whileInView: any
    viewport: any
    transition: any
    variants: any
  }>
}

const GridBox = React.forwardRef<HTMLDivElement, GridBoxProps>(
  ({ className, icon, title, description, tags = [], motionProps = {}, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "bg-white rounded-2xl shadow-md p-6 text-left hover:-translate-y-1 hover:shadow-lg transition-transform duration-300",
          className
        )}
        {...(motionProps as any)}
        {...props}
      >
        <div
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-gradient-to-br from-purple-200/25 to-blue-200/25"
          )}
        >
          {icon}
        </div>

        {title ? (
          <div className="font-semibold text-gray-900 text-lg mb-2">{title}</div>
        ) : null}

        {description ? (
          <div className="text-gray-500 text-sm mb-4">{description}</div>
        ) : null}

        {tags.length ? (
          <div className="flex flex-wrap gap-3 text-gray-500 text-sm">
            {tags.map((t, i) => (
              <span key={i} className="flex items-center gap-1">
                {t.icon}
                {t.text}
              </span>
            ))}
          </div>
        ) : null}
      </motion.div>
    )
  }
)

GridBox.displayName = "GridBox"

export { GridBox }
