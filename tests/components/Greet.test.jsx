import React from 'react'
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'
import '@testing-library/jest-dom/vitest'

describe('Greet', () => {
    it('should render Hello with name, when name is provided', () => {
        render(<Greet name="Luis"/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/luis/i)
    })
})

describe('Greet', () => {
    it('should render Hello with name, when name is NOT provided', () => {
        render(<Greet />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)

    })
})