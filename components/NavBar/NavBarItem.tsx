import React from 'react'
import Icon, { IconType } from '../Icon'
import { usePopperTooltip } from 'react-popper-tooltip'

export type NavBarItemProps = {
  description: string,
  icon: IconType,
  link: string,
}

export default function NavBarItem({ description, icon, link }: NavBarItemProps) {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: 'right',
    offset: [0, 20],
  })

  return (
    <div ref={setTriggerRef}>
      <Icon className="w-5" type={icon} link={link} description={description} />

      {visible && (
        <div
          ref={setTooltipRef}

          {...getTooltipProps({ className: 'tooltip-container w-max capitalize' })}
        >
          <div {...getArrowProps({
            className: 'tooltip-arrow'
          })} />
          {description}
        </div>
      )}
    </div>
  )
}