import Link from 'next/link'
import classes from './page.module.css'
import React from 'react'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

async function page() {
  const meals = await getMeals();

  return (
    <div>
        <header className={classes.header}>
          <h1>Delicious meals, created{' '} <span className={classes.highlight}>by you</span></h1>
          <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
          <p className={classes.cta}>
            <Link href='/meals/share'>Share Your Recipe</Link>
          </p>
        </header>
        <main className={classes.main}>
          <MealsGrid meals={meals}/>
        </main>
    </div>
  )
}

export default page