import React from "react";

interface ErrorMessagesProps {
  error: string
}

export const ErrorMessages = ({error}: ErrorMessagesProps) => {
  return (
    <>
      <p className={'text-center text-red-600'}>{error}</p>
    </>
  )
}