import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export type StepBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  number?: React.ReactNode
  motionProps?: Partial<{
    initial: any
    whileInView: any
    viewport: any
    transition: any
    variants: any
  }>
}

const StepBox = React.forwardRef<HTMLDivElement, StepBoxProps>(
  ({ className, icon, title, description, number, motionProps = {}, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "flex flex-col items-center bg-white/12 border border-white/25 rounded-2xl p-10 backdrop-blur-[18px] shadow-md hover:-translate-y-1 transition-transform duration-300",
          className
        )}
        {...(motionProps as any)}
        {...props}
      >
        <motion.div
          className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center text-4xl text-black mb-6"
        >
          {icon}
        </motion.div>

        {title ? (
          <motion.h3 className="text-xl font-semibold mb-4">{title}</motion.h3>
        ) : null}

        {description ? (
          <motion.p className="text-sm text-white/85 mb-7 max-w-[280px]">{description}</motion.p>
        ) : null}

        {number ? (
          <motion.span className="text-2xl font-medium text-white/70">{number}</motion.span>
        ) : null}
      </motion.div>
    )
  }
)

StepBox.displayName = "StepBox"

export { StepBox }
