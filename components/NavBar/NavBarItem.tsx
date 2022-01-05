import type { Navigation } from '../../types'
import React from 'react'
import Icon from '../Icon'
import { usePopperTooltip } from 'react-popper-tooltip'

type Props = Navigation

export default function NavBarItem({ description, icon, link }: Props) {
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