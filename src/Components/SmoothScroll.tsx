import React, { useRef, useState, useCallback, useLayoutEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import {
	useScroll,
	useTransform,
	useSpring,
	motion,
} from 'framer-motion'
import { Box, chakra } from '@chakra-ui/react'

interface ISmoothScrollProps{
    children: React.ReactNode
	isOpen?: boolean;
}

export const MotionBox = motion(chakra.div);

export const SmoothScroll = ({ children , isOpen}:ISmoothScrollProps) => {
	
	const scrollRef = useRef<HTMLDivElement>(null);

	const [pageHeight, setPageHeight] = useState(0);

	const resizePageHeight = useCallback((entries: any) => {
		for (const entry of entries) {
			setPageHeight(entry.contentRect.height)
		}
	}, [])

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver(entries =>
			resizePageHeight(entries)
		)
		scrollRef && resizeObserver.observe(scrollRef.current!)
		return () => resizeObserver.disconnect()
	}, [scrollRef, resizePageHeight])

	const { scrollY } = useScroll()
	const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
	const physics = { damping: 15, mass: 0.27, stiffness: 55 }
	const spring = useSpring(transform, physics) 

	return (
		<>
			<MotionBox
				ref={scrollRef}
				style={{ y: spring }}
				width={'100%'}
				height={isOpen? '100vh' : ''}
				position={'fixed'}
				top={0}
				left={0}
				overflow={'hidden'}
				willChange={'transform'}
			>
				{children}
			</MotionBox>
			<Box style={{ height: pageHeight }} />
		</>
	)
}
