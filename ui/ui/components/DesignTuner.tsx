"use client";
/*
 * Documentation:
 * DesignTuner — https://app.subframe.com/b0511e1d963d/library?component=DesignTuner_49ed0f90-b4b3-4c0d-b08b-07043782efed
 */

import React from "react";
import * as SubframeUtils from "../utils";

interface DesignTunerRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  previewLabel?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  closeButton?: React.ReactNode;
  tuningLabel?: React.ReactNode;
  fontLabel?: React.ReactNode;
  fontOptions?: React.ReactNode;
  densityLabel?: React.ReactNode;
  densityOptions?: React.ReactNode;
  widthLabel?: React.ReactNode;
  widthOptions?: React.ReactNode;
  rememberCheckbox?: React.ReactNode;
  disclaimerText?: React.ReactNode;
  className?: string;
}

const DesignTunerRoot = React.forwardRef<HTMLDivElement, DesignTunerRootProps>(
  function DesignTunerRoot(
    {
      previewLabel,
      title,
      subtitle,
      closeButton,
      tuningLabel,
      fontLabel,
      fontOptions,
      densityLabel,
      densityOptions,
      widthLabel,
      widthOptions,
      rememberCheckbox,
      disclaimerText,
      className,
      ...otherProps
    }: DesignTunerRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full sm:max-w-[448px] flex-col items-start gap-6 rounded-md border border-solid border-neutral-200 bg-neutral-50 px-6 py-6",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0">
            {previewLabel ? (
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                {previewLabel}
              </span>
            ) : null}
            <div className="flex w-full flex-col items-start gap-2">
              {title ? (
                <span className="text-heading-2 font-heading-2 text-default-font">
                  {title}
                </span>
              ) : null}
              {subtitle ? (
                <span className="text-body font-body text-subtext-color">
                  {subtitle}
                </span>
              ) : null}
            </div>
          </div>
          {closeButton}
        </div>
        <div className="flex w-full flex-col items-start gap-6 border-t border-solid border-neutral-200 pt-6">
          {tuningLabel ? (
            <span className="text-monospace-body font-monospace-body text-default-font">
              {tuningLabel}
            </span>
          ) : null}
          <div className="flex w-full flex-col items-start gap-2">
            {fontLabel ? (
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                {fontLabel}
              </span>
            ) : null}
            {fontOptions ? (
              <div className="flex w-full flex-col items-start gap-2">
                {fontOptions}
              </div>
            ) : null}
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            {densityLabel ? (
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                {densityLabel}
              </span>
            ) : null}
            {densityOptions ? (
              <div className="flex w-full flex-col items-start gap-2">
                {densityOptions}
              </div>
            ) : null}
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            {widthLabel ? (
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                {widthLabel}
              </span>
            ) : null}
            {widthOptions ? (
              <div className="flex w-full flex-col items-start gap-2">
                {widthOptions}
              </div>
            ) : null}
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            {rememberCheckbox ? (
              <div className="flex flex-col items-start gap-2">
                {rememberCheckbox}
              </div>
            ) : null}
            {disclaimerText ? (
              <span className="w-full text-caption font-caption text-subtext-color">
                {disclaimerText}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export const DesignTuner = DesignTunerRoot;
