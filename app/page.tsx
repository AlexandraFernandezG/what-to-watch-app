"use client";
import Image from 'next/image'
import { useEffect } from "react";
import { MovieDetail }  from '../src/ui-components';
import 'app/globals.css';

 export default function Home(){
  return(
  <div>  
    <MovieDetail />
  </div>
    )
 }