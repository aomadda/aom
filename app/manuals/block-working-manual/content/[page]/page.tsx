"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

// Import all BWM Part A content components
import BWMPartAPage1A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage1A'
import BWMPartAPage1B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage1B'
import BWMPartAPage3 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage3'
import BWMPartAPage4A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage4A'
import BWMPartAPage4B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage4B'
import BWMPartAPage5A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage5A'
import BWMPartAPage5B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage5B'
import BWMPartAPage6 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage6'
import BWMPartAPage7 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage7'
import BWMPartAPage8A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage8A'
import BWMPartAPage8B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage8B'
import BWMPartAPage10 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage10'
import BWMPartAPage11A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage11A'
import BWMPartAPage11B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage11B'
import BWMPartAPage13A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage13A'
import BWMPartAPage13B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage13B'
import BWMPartAPage15 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage15'
import BWMPartAPage17 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage17'
import BWMPartAPage18 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage18'
import BWMPartAPage19 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage19'
import BWMPartAPage21A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage21A'
import BWMPartAPage21B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage21B'
import BWMPartAPage21C from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage21C'
import BWMPartAPage22A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage22A'
import BWMPartAPage22B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage22B'
import BWMPartAPage22C from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage22C'
import BWMPartAPage23A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage23A'
import BWMPartAPage23B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage23B'
import BWMPartAPage23C from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage23C'
import BWMPartAPage24 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage24'
import BWMPartAPage26A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage26A'
import BWMPartAPage26B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage26B'
import BWMPartAPage26C from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage26C'
import BWMPartAPage27A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage27A'
import BWMPartAPage27B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage27B'
import BWMPartAPage27C from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage27C'
import BWMPartAPage29 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage29'
import BWMPartAPage30A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage30A'
import BWMPartAPage30B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage30B'
import BWMPartAPage30C from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage30C'
import BWMPartAPage31A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage31A'
import BWMPartAPage31B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage31B'
import BWMPartAPage32 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage32'
import BWMPartAPage33A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage33A'
import BWMPartAPage33B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage33B'
import BWMPartAPage34 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage34'
import BWMPartAPage35 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage35'
import BWMPartAPage37 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage37'
import BWMPartAPage38A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage38A'
import BWMPartAPage38B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage38B'
import BWMPartAPage38C from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage38C'
import BWMPartAPage38D from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage38D'
import BWMPartAPage39 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage39'
import BWMPartAPage40A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage40A'
import BWMPartAPage40B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage40B'
import BWMPartAPage41 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage41'
import BWMPartAPage42A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage42A'
import BWMPartAPage42B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage42B'
import BWMPartAPage43 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage43'
import BWMPartAPage46 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage46'
import BWMPartAPage47A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage47A'
import BWMPartAPage47B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage47B'
import BWMPartAPage48 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage48'
import BWMPartAPage50 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage50'
import BWMPartAPage51 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage51'
import BWMPartAPage52 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage52'
import BWMPartAPage53 from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage53'
import BWMPartAPage55A from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage55A'
import BWMPartAPage55B from '@/components/block-working-manual/bwm-part-a-pages/BWMPartAPage55B'

// Import all BWM Part B content components
import BWMPartBPage1A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage1A'
import BWMPartBPage1B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage1B'
import BWMPartBPage6 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage6'
import BWMPartBPage11 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage11'
import BWMPartBPage17A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage17A'
import BWMPartBPage17B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage17B'
import BWMPartBPage18 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage18'
import BWMPartBPage19A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage19A'
import BWMPartBPage19B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage19B'
import BWMPartBPage20 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage20'
import BWMPartBPage22 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage22'
import BWMPartBPage23A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage23A'
import BWMPartBPage23B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage23B'
import BWMPartBPage24A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage24A'
import BWMPartBPage24B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage24B'
import BWMPartBPage29 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage29'
import BWMPartBPage34 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage34'
import BWMPartBPage37 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage37'
import BWMPartBPage43 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage43'
import BWMPartBPage46 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage46'
import BWMPartBPage51A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage51A'
import BWMPartBPage51B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage51B'
import BWMPartBPage52A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage52A'
import BWMPartBPage52B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage52B'
import BWMPartBPage53A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage53A'
import BWMPartBPage53B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage53B'
import BWMPartBPage53C from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage53C'
import BWMPartBPage54A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage54A'
import BWMPartBPage54B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage54B'
import BWMPartBPage55A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage55A'
import BWMPartBPage55B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage55B'
import BWMPartBPage57 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage57'
import BWMPartBPage58A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage58A'
import BWMPartBPage58B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage58B'
import BWMPartBPage59A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage59A'
import BWMPartBPage59B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage59B'
import BWMPartBPage60A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage60A'
import BWMPartBPage60B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage60B'
import BWMPartBPage61A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage61A'
import BWMPartBPage61B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage61B'
import BWMPartBPage62 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage62'
import BWMPartBPage63 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage63'
import BWMPartBPage64 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage64'
import BWMPartBPage66 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage66'
import BWMPartBPage67A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage67A'
import BWMPartBPage67B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage67B'
import BWMPartBPage67C from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage67C'
import BWMPartBPage67D from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage67D'
import BWMPartBPage69 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage69'
import BWMPartBPage73A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage73A'
import BWMPartBPage73B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage73B'
import BWMPartBPage74A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage74A'
import BWMPartBPage74B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage74B'
import BWMPartBPage76A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage76A'
import BWMPartBPage76B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage76B'
import BWMPartBPage77 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage77'
import BWMPartBPage79 from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage79'
import BWMPartBPage80A from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage80A'
import BWMPartBPage80B from '@/components/block-working-manual/bwm-part-b-pages/BWMPartBPage80B'

// Import all BWM Part C content components
import BWMPartCPage1A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage1A'
import BWMPartCPage1B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage1B'
import BWMPartCPage2 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage2'
import BWMPartCPage3 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage3'
import BWMPartCPage4A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage4A'
import BWMPartCPage4B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage4B'
import BWMPartCPage7A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage7A'
import BWMPartCPage7B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage7B'
import BWMPartCPage8 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage8'
import BWMPartCPage9A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage9A'
import BWMPartCPage9B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage9B'
import BWMPartCPage10 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage10'
import BWMPartCPage11 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage11'
import BWMPartCPage13A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage13A'
import BWMPartCPage13B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage13B'
import BWMPartCPage14 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage14'
import BWMPartCPage15A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage15A'
import BWMPartCPage15B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage15B'
import BWMPartCPage23A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage23A'
import BWMPartCPage23B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage23B'
import BWMPartCPage23C from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage23C'
import BWMPartCPage24A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage24A'
import BWMPartCPage24B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage24B'
import BWMPartCPage24C from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage24C'
import BWMPartCPage25A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage25A'
import BWMPartCPage25B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage25B'
import BWMPartCPage25C from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage25C'
import BWMPartCPage26 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage26'
import BWMPartCPage27 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage27'
import BWMPartCPage30 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage30'
import BWMPartCPage31A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage31A'
import BWMPartCPage31B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage31B'
import BWMPartCPage32 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage32'
import BWMPartCPage34 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage34'
import BWMPartCPage35 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage35'
import BWMPartCPage36 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage36'
import BWMPartCPage37 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage37'
import BWMPartCPage38A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage38A'
import BWMPartCPage38B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage38B'
import BWMPartCPage39 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage39'
import BWMPartCPage40 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage40'
import BWMPartCPage42 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage42'
import BWMPartCPage43 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage43'
import BWMPartCPage44 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage44'
import BWMPartCPage46A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage46A'
import BWMPartCPage46B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage46B'
import BWMPartCPage47A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage47A'
import BWMPartCPage47B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage47B'
import BWMPartCPage47C from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage47C'
import BWMPartCPage48 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage48'
import BWMPartCPage49 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage49'
import BWMPartCPage50A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage50A'
import BWMPartCPage50B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage50B'
import BWMPartCPage50C from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage50C'
import BWMPartCPage52A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage52A'
import BWMPartCPage52B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage52B'
import BWMPartCPage53 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage53'
import BWMPartCPage55 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage55'
import BWMPartCPage56 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage56'
import BWMPartCPage58 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage58'
import BWMPartCPage59 from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage59'
import BWMPartCPage60A from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage60A'
import BWMPartCPage60B from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage60B'
import BWMPartCPage60C from '@/components/block-working-manual/bwm-part-c-pages/BWMPartCPage60C'

// Import all BWM Annexure content components
import BWMAnnexurePage1 from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage1'
import BWMAnnexurePage2A from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage2A'
import BWMAnnexurePage2B from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage2B'
import BWMAnnexurePage2C from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage2C'
import BWMAnnexurePage3 from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage3'
import BWMAnnexurePage4A from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage4A'
import BWMAnnexurePage4B from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage4B'
import BWMAnnexurePage4C from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage4C'
import BWMAnnexurePage5A from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage5A'
import BWMAnnexurePage5B from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage5B'
import BWMAnnexurePage6 from '@/components/block-working-manual/bwm-annexure-pages/BWMAnnexurePage6'

// Import all BWM Annexure One content components
import BWMAnnexureOnePage1A from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage1A'
import BWMAnnexureOnePage1B from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage1B'
import BWMAnnexureOnePage2A from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage2A'
import BWMAnnexureOnePage2B from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage2B'
import BWMAnnexureOnePage3 from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage3'
import BWMAnnexureOnePage5 from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage5'
import BWMAnnexureOnePage6A from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage6A'
import BWMAnnexureOnePage6B from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage6B'
import BWMAnnexureOnePage6C from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage6C'
import BWMAnnexureOnePage7 from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage7'
import BWMAnnexureOnePage9 from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage9'
import BWMAnnexureOnePage10 from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage10'
import BWMAnnexureOnePage11A from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage11A'
import BWMAnnexureOnePage11B from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage11B'
import BWMAnnexureOnePage12 from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage12'
import BWMAnnexureOnePage14 from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage14'
import BWMAnnexureOnePage16A from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage16A'
import BWMAnnexureOnePage16B from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage16B'
import BWMAnnexureOnePage18 from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage18'
import BWMAnnexureOnePage19 from '@/components/block-working-manual/bwm-annexure-one-pages/BWMAnnexureOnePage19'

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const pageNumber = params.page as string
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(false)
  }, [pageNumber])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Map page numbers to components
  const pageComponents: { [key: string]: React.ComponentType } = {
    '1': BWMPartAPage1A,
    '1A': BWMPartAPage1A,
    '1B': BWMPartAPage1B,
    '3': BWMPartAPage3,
    '4': BWMPartAPage4A,
    '4A': BWMPartAPage4A,
    '4B': BWMPartAPage4B,
    '5': BWMPartAPage5A,
    '5A': BWMPartAPage5A,
    '5B': BWMPartAPage5B,
    '6': BWMPartAPage6,
    '7': BWMPartAPage7,
    '8': BWMPartAPage8A,
    '8A': BWMPartAPage8A,
    '8B': BWMPartAPage8B,
    '10': BWMPartAPage10,
    '11': BWMPartAPage11A,
    '11A': BWMPartAPage11A,
    '11B': BWMPartAPage11B,
    '13': BWMPartAPage13A,
    '13A': BWMPartAPage13A,
    '13B': BWMPartAPage13B,
    '15': BWMPartAPage15,
    '17': BWMPartAPage17,
    '18': BWMPartAPage18,
    '19': BWMPartAPage19,
    '21': BWMPartAPage21A,
    '21A': BWMPartAPage21A,
    '21B': BWMPartAPage21B,
    '21C': BWMPartAPage21C,
    '22': BWMPartAPage22A,
    '22A': BWMPartAPage22A,
    '22B': BWMPartAPage22B,
    '22C': BWMPartAPage22C,
    '23': BWMPartAPage23A,
    '23A': BWMPartAPage23A,
    '23B': BWMPartAPage23B,
    '23C': BWMPartAPage23C,
    '24': BWMPartAPage24,
    '26': BWMPartAPage26A,
    '26A': BWMPartAPage26A,
    '26B': BWMPartAPage26B,
    '26C': BWMPartAPage26C,
    '27': BWMPartAPage27A,
    '27A': BWMPartAPage27A,
    '27B': BWMPartAPage27B,
    '27C': BWMPartAPage27C,
    '29': BWMPartAPage29,
    '30': BWMPartAPage30A,
    '30A': BWMPartAPage30A,
    '30B': BWMPartAPage30B,
    '30C': BWMPartAPage30C,
    '31': BWMPartAPage31A,
    '31A': BWMPartAPage31A,
    '31B': BWMPartAPage31B,
    '32': BWMPartAPage32,
    '33': BWMPartAPage33A,
    '33A': BWMPartAPage33A,
    '33B': BWMPartAPage33B,
    '34': BWMPartAPage34,
    '35': BWMPartAPage35,
    '37': BWMPartAPage37,
    '38': BWMPartAPage38A,
    '38A': BWMPartAPage38A,
    '38B': BWMPartAPage38B,
    '38C': BWMPartAPage38C,
    '38D': BWMPartAPage38D,
    '39': BWMPartAPage39,
    '40': BWMPartAPage40A,
    '40A': BWMPartAPage40A,
    '40B': BWMPartAPage40B,
    '41': BWMPartAPage41,
    '42': BWMPartAPage42A,
    '42A': BWMPartAPage42A,
    '42B': BWMPartAPage42B,
    '43': BWMPartAPage43,
    '46': BWMPartAPage46,
    '47': BWMPartAPage47A,
    '47A': BWMPartAPage47A,
    '47B': BWMPartAPage47B,
    '48': BWMPartAPage48,
    '50': BWMPartAPage50,
    '51': BWMPartAPage51,
    '52': BWMPartAPage52,
    '53': BWMPartAPage53,
    '55': BWMPartAPage55A,
    '55A': BWMPartAPage55A,
    '55B': BWMPartAPage55B,
    // Part B Pages (prefixed with 'B')
    'B1A': BWMPartBPage1A,
    'B1B': BWMPartBPage1B,
    'B6': BWMPartBPage6,
    'B11': BWMPartBPage11,
    'B17A': BWMPartBPage17A,
    'B17B': BWMPartBPage17B,
    'B18': BWMPartBPage18,
    'B19A': BWMPartBPage19A,
    'B19B': BWMPartBPage19B,
    'B20': BWMPartBPage20,
    'B22': BWMPartBPage22,
    'B23A': BWMPartBPage23A,
    'B23B': BWMPartBPage23B,
    'B24A': BWMPartBPage24A,
    'B24B': BWMPartBPage24B,
    'B29': BWMPartBPage29,
    'B34': BWMPartBPage34,
    'B37': BWMPartBPage37,
    'B43': BWMPartBPage43,
    'B46': BWMPartBPage46,
    'B51A': BWMPartBPage51A,
    'B51B': BWMPartBPage51B,
    'B52A': BWMPartBPage52A,
    'B52B': BWMPartBPage52B,
    'B53A': BWMPartBPage53A,
    'B53B': BWMPartBPage53B,
    'B53C': BWMPartBPage53C,
    'B54A': BWMPartBPage54A,
    'B54B': BWMPartBPage54B,
    'B55A': BWMPartBPage55A,
    'B55B': BWMPartBPage55B,
    'B57': BWMPartBPage57,
    'B58A': BWMPartBPage58A,
    'B58B': BWMPartBPage58B,
    'B59A': BWMPartBPage59A,
    'B59B': BWMPartBPage59B,
    'B60A': BWMPartBPage60A,
    'B60B': BWMPartBPage60B,
    'B61A': BWMPartBPage61A,
    'B61B': BWMPartBPage61B,
    'B62': BWMPartBPage62,
    'B63': BWMPartBPage63,
    'B64': BWMPartBPage64,
    'B66': BWMPartBPage66,
    'B67A': BWMPartBPage67A,
    'B67B': BWMPartBPage67B,
    'B67C': BWMPartBPage67C,
    'B67D': BWMPartBPage67D,
    'B69': BWMPartBPage69,
    'B73A': BWMPartBPage73A,
    'B73B': BWMPartBPage73B,
    'B74A': BWMPartBPage74A,
    'B74B': BWMPartBPage74B,
    'B76A': BWMPartBPage76A,
    'B76B': BWMPartBPage76B,
    'B77': BWMPartBPage77,
    'B79': BWMPartBPage79,
    'B80A': BWMPartBPage80A,
    'B80B': BWMPartBPage80B,
    // Part C Pages (prefixed with 'C')
    'C1A': BWMPartCPage1A,
    'C1B': BWMPartCPage1B,
    'C2': BWMPartCPage2,
    'C3': BWMPartCPage3,
    'C4A': BWMPartCPage4A,
    'C4B': BWMPartCPage4B,
    'C7A': BWMPartCPage7A,
    'C7B': BWMPartCPage7B,
    'C8': BWMPartCPage8,
    'C9A': BWMPartCPage9A,
    'C9B': BWMPartCPage9B,
    'C10': BWMPartCPage10,
    'C11': BWMPartCPage11,
    'C13A': BWMPartCPage13A,
    'C13B': BWMPartCPage13B,
    'C14': BWMPartCPage14,
    'C15A': BWMPartCPage15A,
    'C15B': BWMPartCPage15B,
    'C23A': BWMPartCPage23A,
    'C23B': BWMPartCPage23B,
    'C23C': BWMPartCPage23C,
    'C24A': BWMPartCPage24A,
    'C24B': BWMPartCPage24B,
    'C24C': BWMPartCPage24C,
    'C25A': BWMPartCPage25A,
    'C25B': BWMPartCPage25B,
    'C25C': BWMPartCPage25C,
    'C26': BWMPartCPage26,
    'C27': BWMPartCPage27,
    'C30': BWMPartCPage30,
    'C31A': BWMPartCPage31A,
    'C31B': BWMPartCPage31B,
    'C32': BWMPartCPage32,
    'C34': BWMPartCPage34,
    'C35': BWMPartCPage35,
    'C36': BWMPartCPage36,
    'C37': BWMPartCPage37,
    'C38A': BWMPartCPage38A,
    'C38B': BWMPartCPage38B,
    'C39': BWMPartCPage39,
    'C40': BWMPartCPage40,
    'C42': BWMPartCPage42,
    'C43': BWMPartCPage43,
    'C44': BWMPartCPage44,
    'C46A': BWMPartCPage46A,
    'C46B': BWMPartCPage46B,
    'C47A': BWMPartCPage47A,
    'C47B': BWMPartCPage47B,
    'C47C': BWMPartCPage47C,
    'C48': BWMPartCPage48,
    'C49': BWMPartCPage49,
    'C50A': BWMPartCPage50A,
    'C50B': BWMPartCPage50B,
    'C50C': BWMPartCPage50C,
    'C52A': BWMPartCPage52A,
    'C52B': BWMPartCPage52B,
    'C53': BWMPartCPage53,
    'C55': BWMPartCPage55,
    'C56': BWMPartCPage56,
    'C58': BWMPartCPage58,
    'C59': BWMPartCPage59,
    'C60A': BWMPartCPage60A,
    'C60B': BWMPartCPage60B,
    'C60C': BWMPartCPage60C,
    // Annexure Pages (prefixed with 'A')
    'A1': BWMAnnexurePage1,
    'A2A': BWMAnnexurePage2A,
    'A2B': BWMAnnexurePage2B,
    'A2C': BWMAnnexurePage2C,
    'A3': BWMAnnexurePage3,
    'A4A': BWMAnnexurePage4A,
    'A4B': BWMAnnexurePage4B,
    'A4C': BWMAnnexurePage4C,
    'A5A': BWMAnnexurePage5A,
    'A5B': BWMAnnexurePage5B,
    'A6': BWMAnnexurePage6,
    // Annexure One Pages (prefixed with 'O')
    'O1A': BWMAnnexureOnePage1A,
    'O1B': BWMAnnexureOnePage1B,
    'O2A': BWMAnnexureOnePage2A,
    'O2B': BWMAnnexureOnePage2B,
    'O3': BWMAnnexureOnePage3,
    'O5': BWMAnnexureOnePage5,
    'O6A': BWMAnnexureOnePage6A,
    'O6B': BWMAnnexureOnePage6B,
    'O6C': BWMAnnexureOnePage6C,
    'O7': BWMAnnexureOnePage7,
    'O9': BWMAnnexureOnePage9,
    'O10': BWMAnnexureOnePage10,
    'O11A': BWMAnnexureOnePage11A,
    'O11B': BWMAnnexureOnePage11B,
    'O12': BWMAnnexureOnePage12,
    'O14': BWMAnnexureOnePage14,
    'O16A': BWMAnnexureOnePage16A,
    'O16B': BWMAnnexureOnePage16B,
    'O18': BWMAnnexureOnePage18,
    'O19': BWMAnnexureOnePage19
  }

  // Rule titles mapping based on page numbers
  const getRuleTitle = (page: string): string => {
    const ruleTitles: { [key: string]: string } = {
      '1': 'Provision of Token Block Instruments',
      '1A': 'Provision of Token Block Instruments',
      '1B': 'Description of Neale\'s Ball Token Instrument',
      '3': 'Description of Neale\'s Tablet Token Instrument',
      '4': 'Indoor Apparatus',
      '4A': 'Indoor Apparatus',
      '4B': 'Outdoor Apparatus',
      '5': 'Systems of working',
      '5A': 'Systems of working',
      '5B': 'Block Competency Certificate',
      '6': 'Bell Code',
      '7': 'Precedence of trains',
      '8': 'Acknowledgement of Signals',
      '8A': 'Acknowledgement of Signals',
      '8B': 'Train Signal Register',
      '10': 'Inspection of Train Signal Register',
      '11': 'Station Masters handing over / taking over charge',
      '11A': 'Preservation of Train Signal Register',
      '11B': 'Station Masters handing over / taking over charge',
      '13': 'Access to and operation of equipment',
      '13A': 'Access to and operation of equipment',
      '13B': 'Signalling of a train from one block station to another',
      '15': 'To cancel Line Clear before train enters into Block Section',
      '17': 'Shunting between the Last Stop Signal',
      '18': 'Outlying sidings controlled by the token',
      '19': 'Exchange of Private Numbers',
      '21': 'The \'Is line clear\' signal',
      '21A': 'The \'Call attention\' signal',
      '21B': 'The \'Is line clear\' signal – when to be sent',
      '21C': 'Precautions before asking \'Line clear\'',
      '22': 'Acceptance of the \'Is line clear\' signal',
      '22A': '\'Is line clear\' - when to be asked',
      '22B': 'Acceptance of the \'Is line clear\' signal',
      '22C': 'Precautions before giving \'line clear\'',
      '23': 'Giving \'Line Clear\'',
      '23A': 'Giving \'Line Clear\'',
      '23B': 'Securing of token for delivery',
      '23C': 'Authority to proceed',
      '24': 'Delivery of token to the Driver',
      '26': '\'Train entering block section\' signal',
      '26A': '\'Train entering block section\' signal',
      '26B': 'Surrendering of token by Driver at station',
      '26C': 'Insertion of token in the block instrument',
      '27': 'Insertion of token in the block instrument',
      '27A': 'Giving the \'Train out of block section\' signal',
      '27B': 'Token neither to be transferred from one train to another',
      '27C': 'Private Numbers',
      '29': 'Caution order',
      '30': 'Refusal of the \'Is line clear\' signal',
      '30A': 'Refusal of the \'Is line clear\' signal',
      '30B': 'Special use of \'Obstruction danger\' signal',
      '30C': '\'Cancel last signal\'',
      '31': '\'Cancel last signal\'',
      '31A': '\'Signal given in error\' signal',
      '31B': 'Trains unusually delayed',
      '32': '\'Stop and examine train\' signal',
      '33': 'Trains unusually delayed',
      '33A': '\'Train passed without tail lamp\'',
      '33B': '\'Train divided\' signal',
      '34': '\'Vehicles running away into the block section\' signal',
      '35': 'Precautions when Government staff required to work',
      '37': 'Blocking the line for lorries',
      '38': 'The \'Testing\' signal',
      '38A': 'The \'Testing\' signal',
      '38B': 'Persons authorized to Test',
      '38C': 'Block Section to be clear during Test',
      '38D': 'Procedure for Testing',
      '39': 'Removal of defective Tokens',
      '40': 'Removal of defective Tokens',
      '40A': 'Replacement of token instruments',
      '40B': 'Balancing of tokens in token instruments',
      '41': 'Procedure for extracting the Last Stop Signal control key',
      '42': 'Balancing of tokens',
      '42A': 'Consent required before interfering with equipment',
      '42B': 'Block instruments maintenance work by S & T staff',
      '43': 'Failure of token block instruments',
      '46': 'Loss of token',
      '47': 'Block instruments failure record',
      '47A': 'Block instruments failure record',
      '47B': 'Reports to be sent',
      '48': 'Train signalling during interruption',
      '50': 'Procedure when \'Train entering block section\' signal cannot be given',
      '51': 'Procedure for obtaining Line Clear using telephone',
      '52': 'Procedure using Control telephone',
      '53': 'Procedure using VHF sets',
      '55': 'Resumption of block working after interruption',
      '55A': 'Resumption of block working after interruption',
      '55B': 'Total interruption of communications on single line',
      // Part B titles (prefixed with 'B')
      'B1A': 'Provision of Block Instruments',
      'B1B': 'Parts and description of Diodo Handle Type tokenless Block Instrument',
      'B6': 'Parts and description of Kyosan / Podanur make Push button tokenless block instruments',
      'B11': 'Parts and Description of Axle Counter Proven Block Panel',
      'B17A': 'Systems of working',
      'B17B': 'Block Competency Certificate',
      'B18': 'Bell Code',
      'B19A': 'Acknowledgement of Signals',
      'B19B': 'Precedence of trains',
      'B20': 'Train Signal Register',
      'B22': 'Station Masters handing over / taking over charge',
      'B23A': 'Inspection of Train Signal Register',
      'B23B': 'Preservation of Train Signal Register',
      'B24A': 'Access to and operation of equipment',
      'B24B': 'Signalling of a train over the block section - Daido Handle Type',
      'B29': 'Signalling of a train - Kyosan / Podanur make push button tokenless',
      'B34': 'Operation of Slip siding and Catch siding',
      'B37': 'Signalling of a train - Axle Counter Proven Block Panel',
      'B43': 'Operation of Slip siding and Catch siding while sending / receiving',
      'B46': 'Shunting',
      'B51A': 'Procedure for shunting during failure of Shunt key',
      'B51B': 'The Call attention signal',
      'B52A': 'Precautions before asking Is line clear',
      'B52B': 'Precautions before giving Line clear',
      'B53A': 'Precautions before obtaining Train Going To indication',
      'B53B': 'Is line clear / Train Going To indication - when to be obtained',
      'B53C': 'Giving Line clear',
      'B54A': 'Loco Pilots Authority to proceed',
      'B54B': 'The Train entering block section signal',
      'B55A': 'Clearing the section and train arrival buzzer',
      'B55B': 'Precautions before giving Train out of block section signal',
      'B57': 'Caution order',
      'B58A': 'Refusal of the Is line clear signal',
      'B58B': 'Special use of Obstruction danger signal',
      'B59A': 'Working of trains required to go beyond First Stop Signal',
      'B59B': 'Cancel last signal',
      'B60A': 'Signal given in error signal',
      'B60B': 'Trains unusually delayed',
      'B61A': 'Stop and examine train signal',
      'B61B': 'Train passed without tail lamp',
      'B62': 'Train divided signal',
      'B63': 'Vehicles running away into the block section',
      'B64': 'Precautions when Telecommunication staff work on wires',
      'B66': 'Blocking the line for Lorries and Trollies',
      'B67A': 'The Testing signal',
      'B67B': 'Persons authorized to test',
      'B67C': 'Block Section to be clear during Test',
      'B67D': 'Procedure for testing',
      'B69': 'Failure of tokenless block instruments',
      'B73A': 'Alternative means of communication',
      'B73B': 'Block instruments failure record',
      'B74A': 'Reports to be sent',
      'B74B': 'Train signalling during interruption of block working',
      'B76A': 'Procedure when Train entering block section signal cannot be given',
      'B76B': 'Procedure for obtaining/granting Line Clear using telephone',
      'B77': 'Procedure using Control telephone',
      'B79': 'Procedure using VHF sets',
      'B80A': 'Instructions for working trains during total interruption',
      'B80B': 'Resumption of block working after interruption',
      // Part C titles (prefixed with 'C')
      'C1A': 'Provision of Block Instrument',
      'C1B': 'Parts and Description of Block Instrument',
      'C2': 'Systems of working and Block Competency Certificate',
      'C3': 'Access to and operation of equipment',
      'C4A': 'Despatching a train',
      'C4B': 'Cancel Line clear and IBS procedure',
      'C7A': 'The Call attention signal',
      'C7B': 'Precautions and procedures for Line clear',
      'C8': 'Caution order',
      'C9A': 'Refusal of Is Line clear signal',
      'C9B': 'Special use of Obstruction danger signal',
      'C10': 'Obstruction on double line - Block Forward',
      'C11': 'Obstruction on double line - Block Back',
      'C13A': 'Cancel last signal',
      'C13B': 'Train wrongly described',
      'C14': 'Train unusually delayed',
      'C15A': 'Stop and examine train signal',
      'C15B': 'Train passed without tail lamp and other signals',
      'C23A': 'Material trains',
      'C23B': 'Lorries, Trollies and Rail-cum-Road Vehicles',
      'C23C': 'Persons authorized to test',
      'C24A': 'Block Section to be clear during test',
      'C24B': 'Procedure for testing',
      'C24C': 'Consent required before interfering',
      'C25A': 'Block instrument maintenance work',
      'C25B': 'Failure of Last Stop Signal',
      'C25C': 'Failure of operating handle lock',
      'C26': 'Failure of block instrument',
      'C27': 'Reports to be sent',
      'C30': 'Paper line clear ticket',
      'C31A': 'Working of trains during failure',
      'C31B': 'Procedure using telephone for Line Clear',
      'C32': 'Procedure using Control telephone',
      'C34': 'Procedure using VHF sets',
      'C35': 'Total interruption of communications',
      'C36': 'Restoration of working with block instruments',
      'C37': 'TSL working when one line is obstructed',
      'C38A': 'TSL working during total interruption',
      'C38B': 'TSL working procedures',
      'C39': 'TSL working additional procedures',
      'C40': 'TSL working safety measures',
      'C42': 'TSL working communication protocols',
      'C43': 'TSL working emergency procedures',
      'C44': 'TSL working restoration procedures',
      'C46A': 'TSL working special instructions',
      'C46B': 'TSL working documentation',
      'C47A': 'TSL working reporting',
      'C47B': 'TSL working supervision',
      'C47C': 'TSL working final procedures',
      'C48': 'TSL working completion',
      'C49': 'TSL working follow-up',
      'C50A': 'TSL working review',
      'C50B': 'TSL working analysis',
      'C50C': 'TSL working comprehensive procedures',
      'C52A': 'Additional TSL procedures',
      'C52B': 'TSL safety protocols',
      'C53': 'TSL emergency measures',
      'C55': 'TSL restoration guidelines',
      'C56': 'TSL operational procedures',
      'C58': 'TSL final instructions',
      'C59': 'TSL closing procedures',
      'C60A': 'TSL documentation completion',
      'C60B': 'TSL reporting completion',
      'C60C': 'TSL work completion',
      // Annexure titles (prefixed with 'A')
      'A1': 'Use of Line Clear inquiry message',
      'A2A': 'Daily serial numbers and Private Numbers',
      'A2B': 'Preservation of Forms',
      'A2C': 'Method of sending trains',
      'A3': 'Delivery of Paper Line Clear Ticket',
      'A4A': 'Counter Line Clear enquiry',
      'A4B': 'Refusal of Line Clear',
      'A4C': 'Withdrawal of Line Clear in emergency',
      'A5A': 'Applying Line Clear for shunting',
      'A5B': 'Cancelling Line Clear',
      'A6': 'Specimen Forms',
      // Annexure One titles (prefixed with 'O')
      'O1A': 'Block Panel overview',
      'O1B': 'Description of Block Panel',
      'O2A': 'Operations of Block Panel',
      'O2B': 'Detailed operations procedures',
      'O3': 'Advanced operations',
      'O5': 'Special procedures',
      'O6A': 'Catch siding operations',
      'O6B': 'Slip siding operations',
      'O6C': 'Additional operations',
      'O7': 'Shunting operations',
      'O9': 'Testing procedures',
      'O10': 'Maintenance operations',
      'O11A': 'Emergency operations',
      'O11B': 'Block Failures and Actions',
      'O12': 'Types of failures',
      'O14': 'Failure procedures',
      'O16A': 'Failure of LSS',
      'O16B': 'Failure of IBS',
      'O18': 'Suspension of block instrument working',
      'O19': 'Restoration procedures'
    }
    return ruleTitles[page] || 'Block Working Manual Content'
  }

  const ContentComponent = pageComponents[pageNumber]

  const openPDF = () => {
    // Determine if it's Part A, B, C, Annexure, or Annexure One
    const isPartB = pageNumber.startsWith('B')
    const isPartC = pageNumber.startsWith('C')
    const isAnnexure = pageNumber.startsWith('A')
    const isAnnexureOne = pageNumber.startsWith('O')
    const actualPageNumber = (isPartB || isPartC || isAnnexure || isAnnexureOne) ? pageNumber.substring(1) : pageNumber
    
    let pdfFileName = ''
    let pdfPath = ''
    
    if (isAnnexureOne) {
      pdfFileName = `BWMAnnexureOnePage${actualPageNumber}.pdf`
      pdfPath = `/block-working-manual-pdfs/BWMAnnexureOnePages/${pdfFileName}`
    } else if (isAnnexure) {
      pdfFileName = `BWMAnnexurePage${actualPageNumber}.pdf`
      pdfPath = `/block-working-manual-pdfs/BWMAnnexurePages/${pdfFileName}`
    } else if (isPartC) {
      pdfFileName = `BWMPartCPage${actualPageNumber}.pdf`
      pdfPath = `/block-working-manual-pdfs/BWMPartCPages/${pdfFileName}`
    } else if (isPartB) {
      pdfFileName = `BWMPartBPage${actualPageNumber}.pdf`
      pdfPath = `/block-working-manual-pdfs/BWMPartBPages/${pdfFileName}`
    } else {
      pdfFileName = `BWMPartAPage${pageNumber}.pdf`
      pdfPath = `/block-working-manual-pdfs/BWMPartAPages/${pdfFileName}`
    }
    
    try {
      // Open PDF in new tab
      window.open(pdfPath, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error opening PDF:', error)
      // Fallback: try without parameters
      window.open(pdfPath, '_blank')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-300 mb-6">Content for page {pageNumber} is not available.</p>
            <button
              onClick={() => router.push('/manuals/block-working-manual')}
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Determine if it's Part A, B, C, Annexure, or Annexure One for styling
  const isPartB = pageNumber.startsWith('B')
  const isPartC = pageNumber.startsWith('C')
  const isAnnexure = pageNumber.startsWith('A')
  const isAnnexureOne = pageNumber.startsWith('O')
  
  let bgGradient = "from-blue-900 via-indigo-900 to-purple-900"
  let headerGradient = "from-blue-500 to-indigo-600"
  let partTitle = "PART-A - SINGLE LINE - TOKEN"
  let textColor = "text-blue-100"
  let borderColor = "border-blue-400/30"
  
  if (isAnnexureOne) {
    bgGradient = "from-cyan-900 via-sky-900 to-blue-900"
    headerGradient = "from-cyan-500 to-sky-600"
    partTitle = "ANNEXURE-I - SSBPAC (D)/UFSBI DOUBLE LINE"
    textColor = "text-cyan-100"
    borderColor = "border-cyan-400/30"
  } else if (isAnnexure) {
    bgGradient = "from-orange-900 via-amber-900 to-yellow-900"
    headerGradient = "from-orange-500 to-amber-600"
    partTitle = "ANNEXURE - PAPER LINE CLEAR TICKETS"
    textColor = "text-orange-100"
    borderColor = "border-orange-400/30"
  } else if (isPartC) {
    bgGradient = "from-purple-900 via-violet-900 to-fuchsia-900"
    headerGradient = "from-purple-500 to-violet-600"
    partTitle = "PART-C - DOUBLE LINE BWMD"
    textColor = "text-purple-100"
    borderColor = "border-purple-400/30"
  } else if (isPartB) {
    bgGradient = "from-emerald-900 via-teal-900 to-cyan-900"
    headerGradient = "from-emerald-500 to-teal-600"
    partTitle = "PART-B - SINGLE LINE - TOKENLESS"
    textColor = "text-emerald-100"
    borderColor = "border-emerald-400/30"
  }

  return (
    <div className={`min-h-screen bg-linear-to-br ${bgGradient}`}> 
      {/* Header Navigation */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/manuals/block-working-manual')}
                className={`flex items-center space-x-2 bg-linear-to-r ${headerGradient} text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:brightness-110 transition-all duration-300 mr-2`}
              >
                <span>Back to Index</span>
              </button>
            </div>

            <div className={`bg-linear-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border ${borderColor}`}>
              <ul className="space-y-1 text-center">
                <li className="flex items-center justify-center space-x-2">
                  <span className="text-white text-xs lg:text-sm">Topic: {getRuleTitle(pageNumber)}</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={openPDF}
                className="flex items-center space-x-2 bg-linear-to-r from-red-500 to-pink-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-red-600 hover:to-pink-700 transition-all duration-300"
              >
                <span>Document</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto lg:px-4 px-2 py-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className={`bg-linear-to-r ${headerGradient} text-white py-4 px-2`}>
            <div className="flex items-center justify-center space-x-3">
              <div>
                <h1 className="text-2xl lg:text-3xl font-semibold text-center uppercase">Block Working Manual</h1>
                <hr className="border-white/20"/>
                <p className={`${textColor} text-sm lg:text-base text-center mt-2`}>
                  {partTitle}
                </p>
                <p className="text-white text-sm lg:text-base text-center mt-1">
                  Topic: {getRuleTitle(pageNumber)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:p-6 p-1">
            <ContentComponent />
          </div>

          {/* Navigation Buttons */}
          <div className="mt-1 mb-1 p-3">
            <div className="flex items-center justify-between space-x-8">
              {/* Previous Page Button */}
              <button
                onClick={() => {
                  const currentPageNum = pageNumber
                  const availablePages = Object.keys(pageComponents)
                  const currentIndex = availablePages.indexOf(currentPageNum)
                  
                  if (currentIndex > 0) {
                    const prevPage = availablePages[currentIndex - 1]
                    router.push(`/manuals/block-working-manual/content/${prevPage}`)
                  }
                }}
                disabled={(() => {
                  const currentPageNum = pageNumber
                  const availablePages = Object.keys(pageComponents)
                  const currentIndex = availablePages.indexOf(currentPageNum)
                  return currentIndex <= 0
                })()}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                  (() => {
                    const currentPageNum = pageNumber
                    const availablePages = Object.keys(pageComponents)
                    const currentIndex = availablePages.indexOf(currentPageNum)
                    return currentIndex > 0
                  })()
                    ? `bg-linear-to-r ${headerGradient} hover:brightness-110 hover:scale-105`
                    : 'bg-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
                  Previous
                </span>
                <hr className="border-white/30 w-full my-1" />
                <span className='text-xs lg:text-sm'>
                  {(() => {
                    const currentPageNum = pageNumber
                    const availablePages = Object.keys(pageComponents)
                    const currentIndex = availablePages.indexOf(currentPageNum)
                    
                    if (currentIndex > 0) {
                      const prevPage = availablePages[currentIndex - 1]
                      return getRuleTitle(prevPage)
                    }
                    return "Previous"
                  })()}
                </span>
              </button>

              {/* Next Page Button */}
              <button
                onClick={() => {
                  const currentPageNum = pageNumber
                  const availablePages = Object.keys(pageComponents)
                  const currentIndex = availablePages.indexOf(currentPageNum)
                  
                  if (currentIndex < availablePages.length - 1) {
                    const nextPage = availablePages[currentIndex + 1]
                    router.push(`/manuals/block-working-manual/content/${nextPage}`)
                  }
                }}
                disabled={(() => {
                  const currentPageNum = pageNumber
                  const availablePages = Object.keys(pageComponents)
                  const currentIndex = availablePages.indexOf(currentPageNum)
                  return currentIndex >= availablePages.length - 1
                })()}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                  (() => {
                    const currentPageNum = pageNumber
                    const availablePages = Object.keys(pageComponents)
                    const currentIndex = availablePages.indexOf(currentPageNum)
                    return currentIndex < availablePages.length - 1
                  })()
                    ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                    : 'bg-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
                  Next
                </span>
                <hr className="border-white/30 w-full my-1" />
                <span className='text-xs lg:text-sm'>
                  {(() => {
                    const currentPageNum = pageNumber
                    const availablePages = Object.keys(pageComponents)
                    const currentIndex = availablePages.indexOf(currentPageNum)
                    
                    if (currentIndex < availablePages.length - 1) {
                      const nextPage = availablePages[currentIndex + 1]
                      return getRuleTitle(nextPage)
                    }
                    return "Next"
                  })()}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 left-4 bg-linear-to-tr ${
            isAnnexureOne ? 'from-cyan-600 via-cyan-400 to-cyan-700' :
            isAnnexure ? 'from-orange-600 via-orange-400 to-orange-700' :
            isPartC ? 'from-purple-600 via-purple-400 to-purple-700' : 
            isPartB ? 'from-emerald-600 via-emerald-400 to-emerald-700' : 
            'from-blue-600 via-blue-400 to-blue-700'
          } text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:brightness-110 transition-all duration-300 z-50 flex items-center justify-center animate-pulse`}
          aria-label="Scroll to top"
        >
          {/* Up Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ContentPage

