"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  textarea?: boolean;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  textarea?: boolean;
}

type CombinedProps = InputProps & TextareaProps;

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  CombinedProps
>(({ className, type, textarea, ...props }, ref) => {
  const radius = 80;
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  if (textarea) {
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
              radial-gradient(
                ${
                  visible ? radius + "px" : "0px"
                } circle at ${mouseX}px ${mouseY}px,
                var(--orange-500),
                transparent 80%
              )
            `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <textarea
          className={cn(
            `flex w-full border-none bg-gray-50 text-black shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-400 
              focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400
              disabled:cursor-not-allowed disabled:opacity-50
              group-hover/input:shadow-none transition duration-400
              h-32 resize-none`,
            className
          )}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
            radial-gradient(
              ${
                visible ? radius + "px" : "0px"
              } circle at ${mouseX}px ${mouseY}px,
              var(--orange-500),
              transparent 80%
            )
          `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <input
        type={type}
        className={cn(
          `flex w-full border-none bg-gray-50 text-black shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
            file:text-sm file:font-medium placeholder:text-neutral-400 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400
            disabled:cursor-not-allowed disabled:opacity-50
            group-hover/input:shadow-none transition duration-400
            h-10`,
          className
        )}
        ref={ref as React.Ref<HTMLInputElement>}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    </motion.div>
  );
});

Input.displayName = "Input";

export { Input };
