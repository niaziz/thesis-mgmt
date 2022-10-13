import React from 'react'
import { classNames } from './Utils'

export function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={
        classNames(
          "shadow-xl relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full text-white bg-[#2469a0] hover:bg-[#23557d]",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative shadow-lg inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}


export function EditButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-[#2469a0] hover:text-[#2469a0]",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}

