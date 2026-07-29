"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

// Import all content components for Accident Manual (Accident Manual Chapter Pages)
import AMChapterPage1A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage1A'
import AMChapterPage1B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage1B'
import AMChapterPage1C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage1C'
import AMChapterPage1D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage1D'
import AMChapterPage1E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage1E'
import AMChapterPage2A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage2A'
import AMChapterPage2B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage2B'
import AMChapterPage2C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage2C'
import AMChapterPage2D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage2D'
import AMChapterPage2E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage2E'
import AMChapterPage2F from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage2F'
import AMChapterPage2G from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage2G'
import AMChapterPage3A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage3A'
import AMChapterPage3B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage3B'
import AMChapterPage3C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage3C'
import AMChapterPage3D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage3D'
import AMChapterPage3E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage3E'
import AMChapterPage3F from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage3F'
import AMChapterPage3G from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage3G'
import AMChapterPage3H from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage3H'
import AMChapterPage4A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage4A'
import AMChapterPage4B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage4B'
import AMChapterPage4C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage4C'
import AMChapterPage4D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage4D'
import AMChapterPage4E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage4E'
import AMChapterPage4F from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage4F'
import AMChapterPage4G from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage4G'
import AMChapterPage4H from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage4H'
import AMChapterPage4I from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage4I'
import AMChapterPage5 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage5'
import AMChapterPage6A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage6A'
import AMChapterPage6B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage6B'
import AMChapterPage6C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage6C'
import AMChapterPage6D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage6D'
import AMChapterPage6E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage6E'
import AMChapterPage6F from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage6F'
import AMChapterPage7A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage7A'
import AMChapterPage7B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage7B'
import AMChapterPage7C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage7C'
import AMChapterPage7D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage7D'
import AMChapterPage7E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage7E'
import AMChapterPage7F from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage7F'
import AMChapterPage8A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage8A'
import AMChapterPage8B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage8B'
import AMChapterPage8C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage8C'
import AMChapterPage9 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage9'
import AMChapterPage11A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage11A'
import AMChapterPage11B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage11B'
import AMChapterPage12 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage12'
import AMChapterPage14A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage14A'
import AMChapterPage14B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage14B'
import AMChapterPage14C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage14C'
import AMChapterPage16A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage16A'
import AMChapterPage16B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage16B'
import AMChapterPage16C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage16C'
import AMChapterPage18A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage18A'
import AMChapterPage18B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage18B'
import AMChapterPage19A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage19A'
import AMChapterPage19B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage19B'
import AMChapterPage20A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage20A'
import AMChapterPage20B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage20B'
import AMChapterPage21 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage21'
import AMChapterPage22 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage22'
import AMChapterPage23 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage23'
import AMChapterPage24A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage24A'
import AMChapterPage24B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage24B'
import AMChapterPage25A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage25A'
import AMChapterPage25B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage25B'
import AMChapterPage25C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage25C'
import AMChapterPage26A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage26A'
import AMChapterPage26B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage26B'
import AMChapterPage26C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage26C'
import AMChapterPage26D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage26D'
import AMChapterPage26E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage26E'
import AMChapterPage27A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage27A'
import AMChapterPage27B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage27B'
import AMChapterPage28A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage28A'
import AMChapterPage28B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage28B'
import AMChapterPage30 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage30'
import AMChapterPage34A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage34A'
import AMChapterPage34B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage34B'
import AMChapterPage34C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage34C'
import AMChapterPage34D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage34D'
import AMChapterPage35 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage35'
import AMChapterPage37 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage37'
import AMChapterPage38A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage38A'
import AMChapterPage38B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage38B'
import AMChapterPage39A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage39A'
import AMChapterPage39B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage39B'
import AMChapterPage39C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage39C'
import AMChapterPage39D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage39D'
import AMChapterPage39E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage39E'
import AMChapterPage39F from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage39F'
import AMChapterPage39G from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage39G'
import AMChapterPage39H from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage39H'
import AMChapterPage40 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage40'
import AMChapterPage41A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage41A'
import AMChapterPage41B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage41B'
import AMChapterPage42 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage42'
import AMChapterPage45 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage45'
import AMChapterPage49A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage49A'
import AMChapterPage49B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage49B'
import AMChapterPage50 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage50'
import AMChapterPage54 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage54'
import AMChapterPage58 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage58'
import AMChapterPage61 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage61'
import AMChapterPage62A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage62A'
import AMChapterPage63A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage63A'
import AMChapterPage63B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage63B'
import AMChapterPage64 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage64'
import AMChapterPage68 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage68'
import AMChapterPage71 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage71'
import AMChapterPage75A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage75A'
import AMChapterPage75B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage75B'
import AMChapterPage75C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage75C'
import AMChapterPage76A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage76A'
import AMChapterPage76B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage76B'
import AMChapterPage76C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage76C'
import AMChapterPage77A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage77A'
import AMChapterPage77B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage77B'
import AMChapterPage77C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage77C'
import AMChapterPage78A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage78A'
import AMChapterPage78B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage78B'
import AMChapterPage78C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage78C'
import AMChapterPage79 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage79'
import AMChapterPage80 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage80'
import AMChapterPage84A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage84A'
import AMChapterPage84B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage84B'
import AMChapterPage85A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage85A'
import AMChapterPage85B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage85B'
import AMChapterPage85C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage85C'
import AMChapterPage87A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage87A'
import AMChapterPage87B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage87B'
import AMChapterPage87C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage87C'
import AMChapterPage90 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage90'
import AMChapterPage92 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage92'
import AMChapterPage93 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage93'
import AMChapterPage94A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage94A'
import AMChapterPage94B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage94B'
import AMChapterPage99A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage99A'
import AMChapterPage99B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage99B'
import AMChapterPage101A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage101A'
import AMChapterPage102 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage102'
import AMChapterPage103A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage103A'
import AMChapterPage103B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage103B'
import AMChapterPage104A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage104A'
import AMChapterPage104B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage104B'
import AMChapterPage104C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage104C'
import AMChapterPage104D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage104D'
import AMChapterPage105 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage105'
import AMChapterPage106A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage106A'
import AMChapterPage106B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage106B'
import AMChapterPage106C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage106C'
import AMChapterPage106D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage106D'
import AMChapterPage106E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage106E'
import AMChapterPage107 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage107'
import AMChapterPage108A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage108A'
import AMChapterPage108B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage108B'
import AMChapterPage108C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage108C'
import AMChapterPage109A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage109A'
import AMChapterPage109B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage109B'
import AMChapterPage109C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage109C'
import AMChapterPage109D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage109D'
import AMChapterPage109E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage109E'
import AMChapterPage110 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage110'
import AMChapterPage113A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage113A'
import AMChapterPage113B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage113B'
import AMChapterPage114A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage114A'
import AMChapterPage114B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage114B'
import AMChapterPage115A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage115A'
import AMChapterPage115B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage115B'
import AMChapterPage115C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage115C'
import AMChapterPage116A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage116A'
import AMChapterPage116B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage116B'
import AMChapterPage116C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage116C'
import AMChapterPage117A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage117A'
import AMChapterPage117B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage117B'
import AMChapterPage118A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage118A'
import AMChapterPage118B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage118B'
import AMChapterPage118C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage118C'
import AMChapterPage118D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage118D'
import AMChapterPage119A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage119A'
import AMChapterPage119B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage119B'
import AMChapterPage119C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage119C'
import AMChapterPage119D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage119D'
import AMChapterPage119E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage119E'
import AMChapterPage120 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage120'
import AMChapterPage121A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage121A'
import AMChapterPage121B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage121B'
import AMChapterPage121C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage121C'
import AMChapterPage122A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage122A'
import AMChapterPage122B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage122B'
import AMChapterPage122C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage122C'
import AMChapterPage123A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage123A'
import AMChapterPage123B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage123B'
import AMChapterPage123C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage123C'
import AMChapterPage123D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage123D'
import AMChapterPage123E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage123E'
import AMChapterPage123F from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage123F'
import AMChapterPage124 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage124'
import AMChapterPage125A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage125A'
import AMChapterPage125B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage125B'
import AMChapterPage126 from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage126'
import AMChapterPage127A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage127A'
import AMChapterPage127B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage127B'
import AMChapterPage127C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage127C'
import AMChapterPage128A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage128A'
import AMChapterPage128B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage128B'
import AMChapterPage128C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage128C'
import AMChapterPage128D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage128D'
import AMChapterPage129A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage129A'
import AMChapterPage129B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage129B'
import AMChapterPage130A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage130A'
import AMChapterPage130B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage130B'
import AMChapterPage131A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage131A'
import AMChapterPage131B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage131B'
import AMChapterPage131C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage131C'
import AMChapterPage131D from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage131D'
import AMChapterPage131E from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage131E'
import AMChapterPage132A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage132A'
import AMChapterPage132B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage132B'
import AMChapterPage132C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage132C'
import AMChapterPage133A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage133A'
import AMChapterPage133B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage133B'
import AMChapterPage133C from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage133C'
import AMChapterPage134A from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage134A'
import AMChapterPage134B from '@/components/accident-manual/accident-manual-chapter-pages/AMChapterPage134B'


// Appendix pages
import AMAppendixPage135A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage135A'
import AMAppendixPage135B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage135B'
import AMAppendixPage136 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage136'
import AMAppendixPage137A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage137A'
import AMAppendixPage137B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage137B'
import AMAppendixPage138 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage138'
import AMAppendixPage139A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage139A'
import AMAppendixPage139B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage139B'
import AMAppendixPage139C from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage139C'
import AMAppendixPage140 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage140'
import AMAppendixPage141 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage141'
import AMAppendixPage142 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage142'
import AMAppendixPage143 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage143'
import AMAppendixPage144 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage144'
import AMAppendixPage145A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage145A'
import AMAppendixPage145B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage145B'
import AMAppendixPage146A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage146A'
import AMAppendixPage146B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage146B'
import AMAppendixPage147A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage147A'
import AMAppendixPage147B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage147B'
import AMAppendixPage148A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage148A'
import AMAppendixPage148B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage148B'
import AMAppendixPage149A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage149A'
import AMAppendixPage149B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage149B'
import AMAppendixPage150 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage150'
import AMAppendixPage151 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage151'
import AMAppendixPage152 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage152'
import AMAppendixPage153 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage153'
import AMAppendixPage154 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage154'
import AMAppendixPage155 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage155'
import AMAppendixPage156A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage156A'
import AMAppendixPage156B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage156B'
import AMAppendixPage156C from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage156C'
import AMAppendixPage157 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage157'
import AMAppendixPage160 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage160'
import AMAppendixPage161A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage161A'
import AMAppendixPage161B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage161B'
import AMAppendixPage162 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage162'
import AMAppendixPage163 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage163'
import AMAppendixPage168 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage168'
import AMAppendixPage169 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage169'
import AMAppendixPage171 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage171'
import AMAppendixPage174 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage174'
import AMAppendixPage175 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage175'
import AMAppendixPage176 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage176'
import AMAppendixPage177 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage177'
import AMAppendixPage178 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage178'
import AMAppendixPage179 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage179'
import AMAppendixPage180 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage180'
import AMAppendixPage181 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage181'
import AMAppendixPage183 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage183'
import AMAppendixPage185 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage185'
import AMAppendixPage186 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage186'
import AMAppendixPage188A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage188A'
import AMAppendixPage188B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage188B'
import AMAppendixPage189 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage189'
import AMAppendixPage190 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage190'
import AMAppendixPage190A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage190A'
import AMAppendixPage190B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage190B'
import AMAppendixPage191 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage191'
import AMAppendixPage192 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage192'
import AMAppendixPage193 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage193'
import AMAppendixPage194 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage194'
import AMAppendixPage195 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage195'
import AMAppendixPage196 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage196'
import AMAppendixPage197 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage197'
import AMAppendixPage198 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage198'
import AMAppendixPage199 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage199'
import AMAppendixPage200 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage200'
import AMAppendixPage201 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage201'
import AMAppendixPage202 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage202'
import AMAppendixPage203 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage203'
import AMAppendixPage204 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage204'
import AMAppendixPage205A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage205A'
import AMAppendixPage205B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage205B'
import AMAppendixPage205C from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage205C'
import AMAppendixPage206 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage206'
import AMAppendixPage207 from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage207'
import AMAppendixPage208A from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage208A'
import AMAppendixPage208B from '@/components/accident-manual/accident-manual-appendix-pages/AMAppendixPage208B'

// Build mapping of page -> component
const pageComponents: { [key: string]: React.ComponentType } = {
  // Early pages
  '1A': AMChapterPage1A,
  '1B': AMChapterPage1B,
  '1C': AMChapterPage1C,
  '1D': AMChapterPage1D,
  '1E': AMChapterPage1E,
  '2A': AMChapterPage2A,
  '2B': AMChapterPage2B,
  '2C': AMChapterPage2C,
  '2D': AMChapterPage2D,
  '2E': AMChapterPage2E,
  '2F': AMChapterPage2F,
  '2G': AMChapterPage2G,
  '3A': AMChapterPage3A,
  '3B': AMChapterPage3B,
  '3C': AMChapterPage3C,
  '3D': AMChapterPage3D,
  '3E': AMChapterPage3E,
  '3F': AMChapterPage3F,
  '3G': AMChapterPage3G,
  '3H': AMChapterPage3H,
  '4A': AMChapterPage4A,
  '4B': AMChapterPage4B,
  '4C': AMChapterPage4C,
  '4D': AMChapterPage4D,
  '4E': AMChapterPage4E,
  '4F': AMChapterPage4F,
  '4G': AMChapterPage4G,
  '4H': AMChapterPage4H,
  '4I': AMChapterPage4I,
  '5': AMChapterPage5,
  '6A': AMChapterPage6A,
  '6B': AMChapterPage6B,
  '6C': AMChapterPage6C,
  '6D': AMChapterPage6D,
  '6E': AMChapterPage6E,
  '6F': AMChapterPage6F,
  '7A': AMChapterPage7A,
  '7B': AMChapterPage7B,
  '7C': AMChapterPage7C,
  '7D': AMChapterPage7D,
  '7E': AMChapterPage7E,
  '7F': AMChapterPage7F,
  '8A': AMChapterPage8A,
  '8B': AMChapterPage8B,
  '8C': AMChapterPage8C,
  '9': AMChapterPage9,
  '11A': AMChapterPage11A,
  '11B': AMChapterPage11B,
  '12': AMChapterPage12,
  '14A': AMChapterPage14A,
  '14B': AMChapterPage14B,
  '14C': AMChapterPage14C,
  '16A': AMChapterPage16A,
  '16B': AMChapterPage16B,
  '16C': AMChapterPage16C,
  '18A': AMChapterPage18A,
  '18B': AMChapterPage18B,
  '19A': AMChapterPage19A,
  '19B': AMChapterPage19B,
  '20A': AMChapterPage20A,
  '20B': AMChapterPage20B,
  '21': AMChapterPage21,
  '22': AMChapterPage22,
  '23': AMChapterPage23,
  '24A': AMChapterPage24A,
  '24B': AMChapterPage24B,
  '25A': AMChapterPage25A,
  '25B': AMChapterPage25B,
  '25C': AMChapterPage25C,
  '26A': AMChapterPage26A,
  '26B': AMChapterPage26B,
  '26C': AMChapterPage26C,
  '26D': AMChapterPage26D,
  '26E': AMChapterPage26E,
  '27A': AMChapterPage27A,
  '27B': AMChapterPage27B,
  '28A': AMChapterPage28A,
  '28B': AMChapterPage28B,
  '30': AMChapterPage30,
  '34A': AMChapterPage34A,
  '34B': AMChapterPage34B,
  '34C': AMChapterPage34C,
  '34D': AMChapterPage34D,
  '35': AMChapterPage35,
  '37': AMChapterPage37,
  '38A': AMChapterPage38A,
  '38B': AMChapterPage38B,
  '39A': AMChapterPage39A,
  '39B': AMChapterPage39B,
  '39C': AMChapterPage39C,
  '39D': AMChapterPage39D,
  '39E': AMChapterPage39E,
  '39F': AMChapterPage39F,
  '39G': AMChapterPage39G,
  '39H': AMChapterPage39H,
  '40': AMChapterPage40,
  '41A': AMChapterPage41A,
  '41B': AMChapterPage41B,
  '42': AMChapterPage42,
  '45': AMChapterPage45,
  '49A': AMChapterPage49A,
  '49B': AMChapterPage49B,
  '50': AMChapterPage50,
  '54': AMChapterPage54,
  '58': AMChapterPage58,
  '61': AMChapterPage61,
  '62A': AMChapterPage62A,
  '63A': AMChapterPage63A,
  '63B': AMChapterPage63B,
  '64': AMChapterPage64,
  '68': AMChapterPage68,
  '71': AMChapterPage71,
  '75A': AMChapterPage75A,
  '75B': AMChapterPage75B,
  '75C': AMChapterPage75C,
  '76A': AMChapterPage76A,
  '76B': AMChapterPage76B,
  '76C': AMChapterPage76C,
  '77A': AMChapterPage77A,
  '77B': AMChapterPage77B,
  '77C': AMChapterPage77C,
  '78A': AMChapterPage78A,
  '78B': AMChapterPage78B,
  '78C': AMChapterPage78C,
  '79': AMChapterPage79,
  '80': AMChapterPage80,
  '84A': AMChapterPage84A,
  '84B': AMChapterPage84B,
  '85A': AMChapterPage85A,
  '85B': AMChapterPage85B,
  '85C': AMChapterPage85C,
  '87A': AMChapterPage87A,
  '87B': AMChapterPage87B,
  '87C': AMChapterPage87C,
  '90': AMChapterPage90,
  '92': AMChapterPage92,
  '93': AMChapterPage93,
  '94A': AMChapterPage94A,
  '94B': AMChapterPage94B,
  '99A': AMChapterPage99A,
  '99B': AMChapterPage99B,  
  '101': AMChapterPage101A,
  '102': AMChapterPage102,
  '103A': AMChapterPage103A,
  '103B': AMChapterPage103B,
  '104A': AMChapterPage104A,
  '104B': AMChapterPage104B,
  '104C': AMChapterPage104C,
  '104D': AMChapterPage104D,
  '105': AMChapterPage105,
  '106A': AMChapterPage106A,
  '106B': AMChapterPage106B,
  '106C': AMChapterPage106C,
  '106D': AMChapterPage106D,
  '106E': AMChapterPage106E,
  '107': AMChapterPage107,
  '108A': AMChapterPage108A,
  '108B': AMChapterPage108B,
  '108C': AMChapterPage108C,
  '109A': AMChapterPage109A,
  '109B': AMChapterPage109B,
  '109C': AMChapterPage109C,
  '109D': AMChapterPage109D,
  '109E': AMChapterPage109E,
  '110': AMChapterPage110,
  '113A': AMChapterPage113A,
  '113B': AMChapterPage113B,
  '114A': AMChapterPage114A,
  '114B': AMChapterPage114B,
  '115A': AMChapterPage115A,
  '115B': AMChapterPage115B,
  '115C': AMChapterPage115C,
  '116A': AMChapterPage116A,
  '116B': AMChapterPage116B,
  '116C': AMChapterPage116C,
  '117A': AMChapterPage117A,
  '117B': AMChapterPage117B,
  '118A': AMChapterPage118A,
  '118B': AMChapterPage118B,
  '118C': AMChapterPage118C,
  '118D': AMChapterPage118D,
  '119A': AMChapterPage119A,
  '119B': AMChapterPage119B,
  '119C': AMChapterPage119C,
  '119D': AMChapterPage119D,
  '119E': AMChapterPage119E,
  '120': AMChapterPage120,
  '121A': AMChapterPage121A,
  '121B': AMChapterPage121B,
  '121C': AMChapterPage121C,
  '122A': AMChapterPage122A,
  '122B': AMChapterPage122B,
  '122C': AMChapterPage122C,
  '123A': AMChapterPage123A,
  '123B': AMChapterPage123B,
  '123C': AMChapterPage123C,
  '123D': AMChapterPage123D,
  '123E': AMChapterPage123E,
  '123F': AMChapterPage123F,
  '124': AMChapterPage124,
  '125A': AMChapterPage125A,
  '125B': AMChapterPage125B,
  '126': AMChapterPage126,
  '127A': AMChapterPage127A,
  '127B': AMChapterPage127B,
  '127C': AMChapterPage127C,
  '128A': AMChapterPage128A,
  '128B': AMChapterPage128B,
  '128C': AMChapterPage128C,
  '128D': AMChapterPage128D,
  '129A': AMChapterPage129A,
  '129B': AMChapterPage129B,
  '130A': AMChapterPage130A,
  '130B': AMChapterPage130B,
  '131A': AMChapterPage131A,
  '131B': AMChapterPage131B,
  '131C': AMChapterPage131C,
  '131D': AMChapterPage131D,
  '131E': AMChapterPage131E,
  '132A': AMChapterPage132A,
  '132B': AMChapterPage132B,
  '132C': AMChapterPage132C,
  '133A': AMChapterPage133A,
  '133B': AMChapterPage133B,
  '133C': AMChapterPage133C,
  '134A': AMChapterPage134A,
  '134B': AMChapterPage134B
}

const appendixComponents: { [key: string]: React.ComponentType } = {
  '135A': AMAppendixPage135A,
  '135B': AMAppendixPage135B,
  '136': AMAppendixPage136,
  '137A': AMAppendixPage137A,
  '137B': AMAppendixPage137B,
  '138': AMAppendixPage138,
  '139A': AMAppendixPage139A,
  '139B': AMAppendixPage139B,
  '139C': AMAppendixPage139C,
  '140': AMAppendixPage140,
  '141': AMAppendixPage141,
  '142': AMAppendixPage142,
  '143': AMAppendixPage143,
  '144': AMAppendixPage144,
  '145A': AMAppendixPage145A,
  '145B': AMAppendixPage145B,
  '146A': AMAppendixPage146A,
  '146B': AMAppendixPage146B,
  '147A': AMAppendixPage147A,
  '147B': AMAppendixPage147B,
  '148A': AMAppendixPage148A,
  '148B': AMAppendixPage148B,
  '149A': AMAppendixPage149A,
  '149B': AMAppendixPage149B,
  '150': AMAppendixPage150,
  '151': AMAppendixPage151,
  '152': AMAppendixPage152,
  '153': AMAppendixPage153,
  '154': AMAppendixPage154,
  '155': AMAppendixPage155,
  '156': AMAppendixPage156A,
  '156B': AMAppendixPage156B,
  '156C': AMAppendixPage156C,
  '157': AMAppendixPage157,
  '160': AMAppendixPage160,
  '161A': AMAppendixPage161A,
  '161B': AMAppendixPage161B,
  '162': AMAppendixPage162,
  '163': AMAppendixPage163,
  '168': AMAppendixPage168,
  '169': AMAppendixPage169,
  '171': AMAppendixPage171,
  '174': AMAppendixPage174,
  '175': AMAppendixPage175,
  '176': AMAppendixPage176,
  '177': AMAppendixPage177,
  '178': AMAppendixPage178,
  '179': AMAppendixPage179,
  '180': AMAppendixPage180,
  '181': AMAppendixPage181,
  '183': AMAppendixPage183,
  '185': AMAppendixPage185,
  '186': AMAppendixPage186,
  '188': AMAppendixPage188A,
  '188B': AMAppendixPage188B,
  '189': AMAppendixPage189,
  '190': AMAppendixPage190,
  '190A': AMAppendixPage190A,
  '190B': AMAppendixPage190B,
  '191': AMAppendixPage191,
  '192': AMAppendixPage192,
  '193': AMAppendixPage193,
  '194': AMAppendixPage194,
  '195': AMAppendixPage195,
  '196': AMAppendixPage196,
  '197': AMAppendixPage197,
  '198': AMAppendixPage198,
  '199': AMAppendixPage199,
  '200': AMAppendixPage200,
  '201': AMAppendixPage201,
  '202': AMAppendixPage202,
  '203': AMAppendixPage203,
  '204': AMAppendixPage204,
  '205A': AMAppendixPage205A,
  '205B': AMAppendixPage205B,
  '205C': AMAppendixPage205C,
  '206': AMAppendixPage206,
  '207': AMAppendixPage207,
  '208A': AMAppendixPage208A,
  '208B': AMAppendixPage208B
}

// Copy of AM chapters data (titles and pages) for topic lookup
const amChapters = [
  {
    id: 1,
    rules: [
      { number: '101', title: 'Train', page: '1A' },
      { number: '101.1', title: 'Passenger Train', page: '1B' },
      { number: '101.2', title: 'Other Trains', page: '1C' },
      { number: '102', title: 'Accident', page: '1D' },
      { number: '103', title: 'Serious Accident', page: '1E' },
      { number: '104', title: 'Injuries', page: '2A' },
      { number: '104.1', title: 'Grievous Injuries', page: '2B' },
      { number: '104.2', title: 'Simple Injuries', page: '2C' },
      { number: '105', title: 'Classification of Accidents', page: '2D' },
      { number: '105.1', title: 'Train Accident', page: '2E' },
      { number: '105.2', title: 'Consequential train accidents', page: '2F' },
      { number: '105.3', title: 'Collisions', page: '2G' },
      { number: '105.4', title: 'Fire in Trains', page: '3A' },
      { number: '105.5', title: 'Accidents at Level Crossings', page: '3B' },
      { number: '105.6', title: 'Derailments', page: '3C' },
      { number: '105.7', title: 'Other train Accidents', page: '3D' },
      { number: '105.8', title: 'Yard Accidents', page: '3E' },
      { number: '105.9', title: 'Indicative Accidents', page: '3F' },
      { number: '105.10', title: 'Averted Collision', page: '3G' },
      { number: '105.11', title: 'Breach of Block Rules', page: '3H' },
      { number: '105.12', title: 'Train Passing Signal at Danger', page: '4A' },
      { number: '105.13', title: 'Equipment Failures', page: '4B' },
      { number: '105.14', title: 'Unusual Incidents', page: '4C' },
      { number: '105.15', title: 'Sabotage', page: '4D' },
      { number: '105.16', title: 'Train Wrecking', page: '4E' },
      { number: '105.17', title: 'Attempted Train wrecking', page: '4F' },
      { number: '106', title: 'Commissioner of Railway Safety', page: '4G' },
      { number: '107', title: 'ACT', page: '4H' },
      { number: '108', title: 'Threshold Value', page: '4I' },
      { number: '108.1', title: 'Classification of Routes', page: '5' },
      { number: '109', title: 'Interruption', page: '6A' },
      { number: '110', title: 'Railway Property', page: '6B' },
      { number: '111', title: 'Public Property', page: '6C' },
      { number: '112', title: 'Slight Damage to Property', page: '6D' },
      { number: '113', title: 'Damage to Property', page: '6E' },
      { number: '114', title: 'Serious Damage to Property', page: '6F' },
      { number: '115', title: 'Department', page: '7A' },
      { number: '116', title: 'Engine Failure and Time Failure', page: '7B' },
      { number: '117', title: 'Scope of the Rules', page: '7C' },
      { number: '118', title: 'Distribution of the Accident Manual', page: '7D' },
      { number: '119', title: 'Acquaintance with the Rules', page: '7E' },
      { number: '120', title: 'Objectives', page: '7F' },
      { number: '121', title: 'Resources of all Departments to be made available', page: '8A' },
      { number: '122', title: 'Every Railway Official to render all possible assistance', page: '8B' },
      { number: '123', title: 'Duty for Securing Safety', page: '8C' }
    ]
  },
  { id: 2, rules: [
    { number: '201', title: 'Consequential Train Accidents', page: '9' },
    { number: '202', title: 'Indicative Accidents', page: '11A' },
    { number: '203', title: 'Equipment failure', page: '11B' },
    { number: '204', title: 'Unusual Incidents', page: '12' }
  ]},
  { id: 3, rules: [
    { number: '301', title: 'Guard of the Train Involved in Accident', page: '14A' },
    { number: '302', title: 'Engine Crew of the Train', page: '14B' },
    { number: '303', title: 'Station Master / Station Manager', page: '14C' },
    { number: '304', title: 'Controlling Station Master', page: '16A' },
    { number: '305', title: 'Train Superintendent / Traveling Ticket Examiner', page: '16B' },
    { number: '306', title: 'Officer or Senior Supervisor first reaching the site', page: '16C' },
    { number: '307', title: 'Commercial Inspectors / Commercial Officers', page: '18A' },
    { number: '308', title: 'Engineering Staff', page: '18B' },
    { number: '309', title: 'Mechanical / B.D.Staff', page: '19A' },
    { number: '310', title: 'Signal and Telecommunication Staff', page: '19B' },
    { number: '311', title: 'Electrical Staff', page: '20A' },
    { number: '312', title: 'Security Staff', page: '20B' },
    { number: '313', title: 'Medical Staff', page: '21' },
    { number: '314', title: 'Chief Controller / Deputy Chief Controller', page: '22' },
    { number: '315', title: 'Commercial Control', page: '23' },
    { number: '316', title: 'Power Controller / Traction Loco Controller', page: '24A' },
    { number: '317', title: 'Traction Power controller', page: '24B' },
    { number: '318', title: 'Senior Divisional Operations Manager', page: '25A' },
    { number: '319', title: 'Senior Divisional Safety Officer', page: '25B' },
    { number: '320', title: 'Senior Divisional Mechanical Engineer', page: '25C' },
    { number: '321', title: 'Senior Divisional Electrical Engineer', page: '26A' },
    { number: '322', title: 'Sr DEE (Traction Distribution)', page: '26B' },
    { number: '323', title: 'Sr DEE (Traction Operation / TRS)', page: '26C' },
    { number: '324', title: 'Senior Divisional Engineer (Civil)', page: '26D' },
    { number: '325', title: 'Senior Divisional Commercial Manager', page: '26E' },
    { number: '326', title: 'Sr DSTE', page: '27A' },
    { number: '327', title: 'Sr DSC (RPF)', page: '27B' }
  ]},
  { id: 4, rules: [
    { number: '401', title: 'Reportable Train Accidents', page: '28A' },
    { number: '402', title: 'Reporting of Accidents', page: '28B' },
    { number: '403', title: 'Particulars to be given in the Accident Report', page: '30' },
    { number: '404', title: 'Fax Report to Railway Board', page: '34A' },
    { number: '405', title: 'Reporting of Indicative Accidents', page: '34B' },
    { number: '406', title: 'Reporting of Accidents at Un-manned Level Crossings', page: '34C' },
    { number: '407', title: 'Serious Accidents to be advised promptly', page: '34D' },
    { number: '408', title: 'Procedure for Sending Accident Messages', page: '35' },
    { number: '409', title: 'Railway Employees to report Accidents', page: '37' },
    { number: '410', title: 'Method of reporting Accidents by Railway Employees', page: '38A' },
    { number: '411', title: 'SM/ in-charge to report Accidents', page: '38B' },
    { number: '412', title: 'Station Master to Advise Control', page: '39A' },
    { number: '413', title: 'Noting down Time of Accident', page: '39B' },
    { number: '414', title: 'Preliminary Telephonic Report by an Officer', page: '39C' },
    { number: '415', title: 'Accidents with Injury/Loss of Life', page: '39D' },
    { number: '416', title: 'Accidents on Assisted and Private Sidings', page: '39E' },
    { number: '417', title: 'Accidents at Joint Stations', page: '39F' },
    { number: '418', title: 'Accidents in Workshops (Factories Act)', page: '39G' },
    { number: '419', title: 'Accidents on Construction lines', page: '39H' },
    { number: '420', title: 'Serious Accidents to the Press', page: '40' },
    { number: '421', title: 'Accident returns to Railway Board', page: '41A' },
    { number: '422', title: 'Preparation of Accident returns', page: '41B' },
    { number: '423', title: 'Accident Returns - Tables 1 to 7', page: '42' }
  ]},
  { id: 5, rules: [
    { number: '501', title: 'Preserve Clues and Evidence at site', page: '45' },
    { number: '502', title: 'Examination to certify fitness', page: '49A' },
    { number: '503', title: 'Sketch of the site of Accident', page: '49B' },
    { number: '504', title: 'Pro-forma in case of Derailment', page: '50' },
    { number: '505', title: 'Locomotive Proforma', page: '54' },
    { number: '506', title: 'Measurement Table for Coach', page: '58' },
    { number: '507', title: 'S&T (Points & Signals)', page: '61' },
    { number: '508', title: 'Typical Sketch of Accident site', page: '62A' }
  ]},
  { id: 6, rules: [
    { number: '601', title: 'Long Range Electric Sirens', page: '63A' },
    { number: '602', title: 'Accident Siren Code', page: '63B' },
    { number: '603', title: 'Stations of Accident Relief Trains', page: '64' },
    { number: '604', title: 'Medical Relief Train & Equipment', page: '68' },
    { number: '605', title: 'Stations with Medical Relief Equipment', page: '71' },
    { number: '606', title: 'Joint Inspection of Relief Machinery', page: '75A' },
    { number: '607', title: 'Action by DMS', page: '75B' },
    { number: '608', title: 'Action by DMO', page: '75B' },
    { number: '609', title: 'Equipment necessary in all accidents', page: '76A' },
    { number: '610', title: 'DMO where MRT is provided', page: '76B' },
    { number: '611', title: 'DMO at Accident spot', page: '76C' },
    { number: '612', title: 'Standing Instructions by CMS', page: '77A' },
    { number: '613', title: 'Responsibility of CMS', page: '77B' },
    { number: '614', title: 'Opening Dressing Station/Hospitals', page: '77C' },
    { number: '615', title: 'Medical Personnel to attend', page: '78A' },
    { number: '616', title: 'DMO to replace articles', page: '78B' },
    { number: '617', title: 'Duty of SM, Control etc.', page: '78C' },
    { number: '618', title: 'Regular drills by staff', page: '79' },
    { number: '619', title: 'First Aid Boxes', page: '80' },
    { number: '620', title: 'Stretchers', page: '84A' },
    { number: '621', title: 'Maintenance of Relief Machinery', page: '84B' },
    { number: '622', title: 'Maintenance of Equipment', page: '85A' },
    { number: '623', title: 'Training of Man power', page: '85B' },
    { number: '624', title: 'Portable Emergency Control Phone', page: '85C' }
  ]},
  { id: 7, rules: [
    { number: '701', title: 'Facility to Non-Railway Officials', page: '87A' },
    { number: '702', title: 'Powers for Helicopter/Aeroplanes', page: '87B' },
    { number: '703', title: 'Medical Aid to Persons Grievously Hurt', page: '87C' },
    { number: '704', title: 'Media Management at Site', page: '90' },
    { number: '705', title: 'Complimentary Passes', page: '92' }
  ]},
  { id: 8, rules: [
    { number: '801', title: 'Relief to Passengers in Train Accidents', page: '93' },
    { number: '802', title: 'Compensation for Death/Injury', page: '94A' },
    { number: '803', title: 'Compensation', page: '94B' }
  ]},
  { id: 9, rules: [
    { number: '901', title: 'Investigation on the spot', page: '99A' },
    { number: '902', title: 'Information for Inquiry Committee', page: '99B' },
    { number: '903', title: 'Object of Accident Inquiry', page: '101' },
    { number: '904', title: 'Classification of Accident Enquiries', page: '101' },
    { number: '905', title: 'Ordering of Inquiries', page: '102' },
    { number: '906', title: 'Minimum level of Inquiry', page: '103' },
    { number: '907', title: 'Schedule for completion', page: '103' },
    { number: '908', title: 'Acceptance of responsibility', page: '104' },
    { number: '909', title: 'Special Report', page: '104' },
    { number: '910', title: 'Commencing Joint/Inter-dept Inquiries', page: '104' },
    { number: '911', title: 'Conducting Joint/Inter Dept Inquiries', page: '104' },
    { number: '912', title: 'Composition of Inquiry Committee', page: '105' },
    { number: '913', title: 'President of Inquiry Committee', page: '106' },
    { number: '914', title: "Officer's duties in inquiry", page: '106' },
    { number: '915', title: 'Failure to attend Inquiry', page: '106' },
    { number: '916', title: 'Postponing of an Inquiry', page: '106' },
    { number: '917', title: 'Guidelines for Committee members', page: '106' },
    { number: '918', title: 'Proceedings of Inquiries', page: '107' },
    { number: '919', title: 'Description of the Accident', page: '108A' },
    { number: '920', title: 'Recording of Evidence', page: '108B' },
    { number: '921', title: 'Findings', page: '108C' },
    { number: '922', title: 'Remarks and Reasons', page: '109A' },
    { number: '923', title: 'Suggestions', page: '109B' },
    { number: '924', title: 'Matters Brought to Light', page: '109C' },
    { number: '925', title: 'Signing of Inquiry Proceedings', page: '109D' },
    { number: '926', title: 'Inquiries at Joint Stations', page: '109E' },
    { number: '927', title: 'Particulars in Special/Inquiry Report', page: '110' },
    { number: '928', title: 'Report of inquiry to Administration', page: '113A' },
    { number: '929', title: 'Acceptance of Findings', page: '113B' },
    { number: '930', title: 'Reports to CRS', page: '114A' },
    { number: '931', title: 'Submission of Inquiry Report', page: '114B' },
    { number: '932', title: 'Metallurgical & Chemical investigation', page: '115A' },
    { number: '933', title: 'Norms of Punishments', page: '115B' },
    { number: '934', title: 'Magisterial Inquiry', page: '115C' },
    { number: '935', title: 'Judicial Inquiry', page: '116A' },
    { number: '936', title: 'Result of Magisterial Inquiry', page: '116B' },
    { number: '937', title: 'Summoning CRS and Railway servants', page: '116C' },
    { number: '938', title: 'Judicial Inquiry decision', page: '117A' },
    { number: '939', title: 'Police Investigation', page: '117B' },
    { number: '940', title: 'Notice of Police Investigation', page: '118A' },
    { number: '941', title: 'Assistance of the District Police', page: '118B' },
    { number: '942', title: 'Result of Police Investigation', page: '118C' },
    { number: '943', title: 'District Police duties', page: '118D' }
  ]},
  { id: 10, rules: [
    { number: '1001', title: 'Telephonic Message to CRS', page: '119A' },
    { number: '1002', title: 'Telephonic advice to CRS', page: '119B' },
    { number: '1003', title: 'Accidents to be reported to CRS by post', page: '119C' },
    { number: '1004', title: 'Non-Reporting of Accidents to CRS', page: '119D' },
    { number: '1005', title: 'Statement of Accidents to CRS', page: '119E' },
    { number: '1006', title: 'Statutory Investigation into Accidents', page: '120' },
    { number: '1007', title: 'Attendance of employees to Inquiries', page: '121A' },
    { number: '1008', title: 'Officers to assist CRS', page: '121B' },
    { number: '1009', title: 'Brief Preliminary Narrative report', page: '121C' },
    { number: '1010', title: 'Final Report', page: '122A' },
    { number: '1011', title: 'Action on the Report', page: '122B' },
    { number: '1012', title: "Railway's remarks on suggestions", page: '122C' },
    { number: '1013', title: 'Publication of Reports', page: '123A' },
    { number: '1014', title: 'District Magistrate to Attend', page: '123B' },
    { number: '1015', title: 'DSP to attend CRS Inquiry', page: '123C' },
    { number: '1016', title: 'Technical Matters', page: '123D' },
    { number: '1017', title: 'Powers of CRS', page: '123E' },
    { number: '1018', title: 'Target dates for returns', page: '123F' },
    { number: '1019', title: 'Target for completion of CRS Inquiries', page: '124' }
  ]},
  { id: 11, rules: [
    { number: '1101', title: 'Unsafe Bunds of Tanks/Rivers', page: '125A' },
    { number: '1102', title: 'Injured/Dead near Track', page: '125B' },
    { number: '1103', title: 'Person Fallen out of a Train', page: '126' },
    { number: '1104', title: 'Carriage Windows or Doors', page: '127A' },
    { number: '1105', title: 'Defective Running of Locomotives', page: '127B' },
    { number: '1106', title: 'Persons found Dead in Trains/Stations', page: '127C' },
    { number: '1107', title: 'Murder on Running Train', page: '128A' },
    { number: '1108', title: 'Care of Dead bodies', page: '128B' },
    { number: '1109', title: 'Material fouling the Track', page: '128C' },
    { number: '1110', title: 'Precautions against Derailment', page: '128D' },
    { number: '1111', title: 'Dangerous practices', page: '129A' },
    { number: '1112', title: 'Reporting Fire', page: '129B' }
  ]},
  { id: 12, rules: [
    { number: '1201', title: 'General', page: '130' },
    { number: '1202', title: 'Explosion on Track or Train', page: '130' },
    { number: '1203', title: 'Duties of Guard/Engine crew', page: '131A' },
    { number: '1204', title: 'Information to Civil and Police', page: '131B' },
    { number: '1205', title: 'Precautions by Engineering Supervisors', page: '131C' },
    { number: '1206', title: 'Duties of Officers and Supervisors', page: '131D' },
    { number: '1207', title: 'Duties of RPF Officials', page: '131E' },
    { number: '1208', title: 'Police Clearance', page: '132A' },
    { number: '1209', title: 'Joint Examination by Civil/Police/Rly', page: '132B' },
    { number: '1210', title: 'Removal and Examination of Rolling stock', page: '132C' },
    { number: '1211', title: 'Preparation of Notes and Drawings', page: '133A' },
    { number: '1212', title: 'Restoration of Communications', page: '133B' },
    { number: '1213', title: 'Preparation of Plan for Inquiry', page: '133C' },
    { number: '1214', title: 'Preservation of Notes and Sketches', page: '134A' },
    { number: '1215', title: 'Association of Security Officer', page: '134B' }
  ]}
]

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const pageNumber = (params.page as string).toUpperCase()
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(false)
  }, [pageNumber])

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const ContentComponent = pageComponents[pageNumber] || appendixComponents[pageNumber]

  const openPDF = () => {
    const isAppendix = Boolean(appendixComponents[pageNumber])
    let pdfPath = ''
    
    if (isAppendix) {
      // Handle special cases for appendix pages that have different file names
      const specialCases: { [key: string]: string } = {
        '145': 'AMAppendixPage145A.pdf', // This page has multiple variants
        '146': 'AMAppendixPage146A.pdf', // This page has multiple variants
        '147': 'AMAppendixPage147A.pdf', // This page has multiple variants
        '148': 'AMAppendixPage148A.pdf', // This page has multiple variants
        '149': 'AMAppendixPage149A.pdf', // This page has multiple variants
        '156': 'AMAppendixPage156A.pdf', // This page has multiple variants
        '161': 'AMAppendixPage161A.pdf', // This page has multiple variants
        '188': 'AMAppendixPage188A.pdf', // This page has multiple variants  
        '190': 'AMAppendixPage190A.pdf', // This page has multiple variants
        '205': 'AMAppendixPage205A.pdf', // This page has multiple variants
        '208': 'AMAppendixPage208A.pdf'  // This page has multiple variants
      }
      
      if (specialCases[pageNumber]) {
        pdfPath = `/accident-manual-pdfs/am-appendix-pages/${specialCases[pageNumber]}`
      } else {
        pdfPath = `/accident-manual-pdfs/am-appendix-pages/AMAppendixPage${pageNumber}.pdf`
      }
    } else {
      // Handle special cases for chapter pages that have different file names
      const specialCases: { [key: string]: string } = {
        '101': 'AMCHAPTERPAGE101A.pdf', // This page has multiple variants
        '103': 'AMCHAPTERPAGE103A.pdf', // This page has multiple variants
        '104': 'AMCHAPTERPAGE104A.pdf', // This page has multiple variants
        '106': 'AMCHAPTERPAGE106A.pdf', // This page has multiple variants
        '108': 'AMCHAPTERPAGE108A.pdf', // This page has multiple variants
        '109': 'AMCHAPTERPAGE109A.pdf', // This page has multiple variants
        '113': 'AMCHAPTERPAGE113A.pdf', // This page has multiple variants
        '114': 'AMCHAPTERPAGE114A.pdf', // This page has multiple variants
        '115': 'AMCHAPTERPAGE115A.pdf', // This page has multiple variants
        '116': 'AMCHAPTERPAGE116A.pdf', // This page has multiple variants
        '118': 'AMCHAPTERPAGE118A.pdf', // This page has multiple variants
        '119': 'AMCHAPTERPAGE119A.pdf', // This page has multiple variants
        '121': 'AMCHAPTERPAGE121A.pdf', // This page has multiple variants
        '122': 'AMCHAPTERPAGE122A.pdf', // This page has multiple variants
        '123': 'AMCHAPTERPAGE123A.pdf', // This page has multiple variants
        '125': 'AMCHAPTERPAGE125A.pdf', // This page has multiple variants
        '127': 'AMCHAPTERPAGE127A.pdf', // This page has multiple variants
        '128': 'AMCHAPTERPAGE128A.pdf', // This page has multiple variants
        '129': 'AMCHAPTERPAGE129A.pdf', // This page has multiple variants
        '130': 'AMCHAPTERPAGE130A.pdf', // This page has multiple variants
        '131': 'AMCHAPTERPAGE131A.pdf', // This page has multiple variants
        '132': 'AMCHAPTERPAGE132A.pdf', // This page has multiple variants
        '133': 'AMCHAPTERPAGE133A.pdf', // This page has multiple variants
        '134': 'AMCHAPTERPAGE134A.pdf'  // This page has multiple variants
      }
      
      if (specialCases[pageNumber]) {
        pdfPath = `/accident-manual-pdfs/am-chapter-pages/${specialCases[pageNumber]}`
      } else {
        pdfPath = `/accident-manual-pdfs/am-chapter-pages/AMCHAPTERPAGE${pageNumber}.pdf`
      }
    }
    
    window.open(pdfPath, '_blank')
  }

  // Flatten rules for topic lookup and for prev/next labels
  const amAppendixRules = useMemo(() => {
    return [
      // Appendix 1
      { number: 'A1.1', title: 'DISASTER MANAGEMENT ACT (2005)', page: '135A' },
      { number: 'A1.2', title: 'NDMA (National Disaster Management Authority)', page: '135B' },
      { number: 'A1.3', title: 'NDRF (National Disaster Relief Force)', page: '136' },
      { number: 'A1.4', title: 'Definition of Disaster', page: '137A' },
      { number: 'A1.5', title: 'IMPORTANT CONTACT NUMBERS – RAILWAYS', page: '137B' },
      { number: 'A1.6', title: 'IMPORTANT CONTACT NUMBERS GOVERNMENT OF ANDHRA PRADESH', page: '138' },
      // Appendix 2
      { number: 'A2.1', title: 'Aim / Objectives', page: '139A' },
      { number: 'A2.2', title: 'Contents of the First Aid box', page: '139B' },
      { number: 'A2.3', title: 'Types of Accident Relief Medical Equipment', page: '139C' },
      { number: 'A2.4', title: 'Steps to be followed while rendering effective help to a person', page: '140' },
      { number: 'A2.5', title: 'ASPHYXIA (SUFFOCATION)', page: '141' },
      { number: 'A2.6', title: 'SHOCK', page: '142' },
      { number: 'A2.7', title: 'WOUNDS AND HEMORRHAGES (BLEEDINGS)', page: '143' },
      { number: 'A2.8', title: 'BURNS AND SCALDS', page: '145' },
      { number: 'A2.9', title: 'FRACTURE, DISLOCATION, SPRAIN AND CRAMP', page: '145' },
      { number: 'A2.10', title: 'POISONS', page: '146' },
      { number: 'A2.11', title: 'SNAKE / DOG / SCORPION BITE TREATMENT', page: '146' },
      { number: 'A2.12', title: 'UNCONSCIOUSNESS (INSENSIBILITY)', page: '147' },
      { number: 'A2.13', title: 'EPILEPSY (FITS)', page: '147' },
      // Appendix 3 (sample)
      { number: 'A3.1', title: 'CRS related Sections', page: '148' },
      { number: 'A3.2', title: 'Construction and Maintenance of Works', page: '148' },
      { number: 'A3.3', title: 'Opening of Railways', page: '149' },
      { number: 'A3.4', title: 'Accidents', page: '149' },
      { number: 'A3.5', title: 'Liability for Death/Injury to passengers', page: '151' },
      { number: 'A3.6', title: 'Penalties and Offences', page: '153' },
      // Appendix 4 (key pages)
      { number: 'A4.1', title: 'Weather Warning Message', page: '156' },
      { number: 'A4.2', title: 'Terminology in Meteorological Bulletins', page: '156' },
      { number: 'A4.3', title: 'Normal Weather Warnings', page: '156' },
      { number: 'A4.4', title: 'Dissemination within Railway', page: '157' },
      { number: 'A4.5', title: 'Flood Warning', page: '160' },
      { number: 'A4.6', title: 'Danger to track and bridges due to Tanks', page: '161' },
      { number: 'A4.7', title: 'Actions during Cyclone (General)', page: '162' },
      { number: 'A4.8', title: 'ANNEXURE-\'A\'', page: '163' },
      { number: 'A4.9', title: 'ANNEXURE-\'B\'', page: '168' },
      { number: 'A4.10', title: 'ANNEXURE-\'C\'', page: '169' },
      // Appendix 5
      { number: 'A5.1', title: 'PUNISHMENT NORMS IN ACCIDENT CASES', page: '171' },
      { number: 'A5.2', title: 'PUNISHMENT NORMS - CIVIL ENGINEERING', page: '174' },
      { number: 'A5.3', title: 'STAFF OF ELECTRICAL DEPARTMENT', page: '175' },
      { number: 'A5.4', title: 'Penalties for Serving Railway Employees', page: '176' },
      // Appendix 6 (selected)
      { number: 'A6.1', title: 'Specimen Form Acc 1 (i)', page: '177' },
      { number: 'A6.2', title: 'Specimen Form Acc 1 (ii)', page: '178' },
      { number: 'A6.3', title: 'Specimen Form Acc 1(iii)', page: '179' },
      { number: 'A6.4', title: 'Specimen Form Acc.2', page: '180' },
      { number: 'A6.5', title: 'Specimen form ACC.3', page: '181' },
      { number: 'A6.6', title: 'Specimen Form ACC.4', page: '183' },
      { number: 'A6.7', title: 'Specimen Form ACC.5', page: '185' },
      { number: 'A6.8', title: 'Specimen Form ACC.6', page: '186' },
      { number: 'A6.9', title: 'Specimen form Acc. 6-A', page: '188' },
      { number: 'A6.10', title: 'Specimen Form ACC, 6-B', page: '188' },
      { number: 'A6.11', title: 'Specimen Form Acc. 6-C', page: '189' },
      { number: 'A6.12', title: 'Specimen Form ACC 6-D', page: '190' },
      { number: 'A6.13', title: 'Specimen Form Acc. 7', page: '190' },
      { number: 'A6.14', title: 'Specimen Form Acc. 8', page: '191' },
      { number: 'A6.15', title: 'Form Acc.9', page: '192' },
      { number: 'A6.16', title: 'Form Acc. 9-A', page: '193' },
      { number: 'A6.17', title: 'Form Acc 9-B', page: '194' },
      { number: 'A6.18', title: 'Form Acc. 9-C', page: '195' },
      { number: 'A6.19', title: 'Form Acc. 9-D', page: '196' },
      { number: 'A6.20', title: 'Form Acc. 9-E', page: '197' },
      { number: 'A6.21', title: 'Form Acc. 9-F', page: '198' },
      { number: 'A6.22', title: 'Form Acc. 9-G', page: '199' },
      { number: 'A6.23', title: 'Form Acc. 9-H', page: '200' },
      { number: 'A6.24', title: 'Form Acc. 9-I', page: '201' },
      { number: 'A6.25', title: 'Form Acc. 9-J', page: '202' },
      { number: 'A6.26', title: 'Form Acc. 9-K', page: '203' },
      { number: 'A6.27', title: 'Form Acc. 9-L', page: '204' },
      { number: 'A6.28', title: 'Form Acc. 9-M', page: '205' },
      { number: 'A6.29', title: 'Form Acc. 9-N', page: '205' },
      { number: 'A6.30', title: 'Form Acc. 9-O', page: '205' },
      { number: 'A6.31', title: 'Form Acc.10', page: '206' },
      { number: 'A6.32', title: 'Form Acc.11', page: '207' },
      { number: 'A6.33', title: 'Form Acc.12', page: '208' },
      { number: 'A6.34', title: 'Form Acc.13', page: '208' }
    ]
  }, [])

  const allRules = useMemo(() => {
    const chapterRules = amChapters.flatMap((c) => c.rules)
    return [...chapterRules, ...amAppendixRules]
  }, [amAppendixRules])
  const currentRule = allRules.find((r) => r.page.toUpperCase() === pageNumber)

  // Sorting helper for pages with numeric + optional letter suffix
  const sortPages = (a: string, b: string) => {
    const match = (s: string) => {
      const m = s.match(/^(\d+)([A-Z]*)$/)
      return m ? { n: parseInt(m[1], 10), l: m[2] || '' } : { n: Number.MAX_SAFE_INTEGER, l: s }
    }
    const A = match(a)
    const B = match(b)
    if (A.n !== B.n) return A.n - B.n
    // Empty letter first, then A, B, C ...
    if (A.l === B.l) return 0
    if (A.l === '') return -1
    if (B.l === '') return 1
    return A.l.localeCompare(B.l)
  }

  const availablePages = useMemo(() => {
    const keys = [...Object.keys(pageComponents), ...Object.keys(appendixComponents)]
    const uniq = Array.from(new Set(keys))
    return uniq.sort(sortPages)
  }, [])
  const currentIndex = availablePages.indexOf(pageNumber)
  const prevPage = currentIndex > 0 ? availablePages[currentIndex - 1] : null
  const nextPage = currentIndex >= 0 && currentIndex < availablePages.length - 1 ? availablePages[currentIndex + 1] : null

  const prevLabel = prevPage ? (allRules.find((r) => r.page.toUpperCase() === prevPage)?.title || `Page ${prevPage}`) : 'Previous'
  const nextLabel = nextPage ? (allRules.find((r) => r.page.toUpperCase() === nextPage)?.title || `Page ${nextPage}`) : 'Next'

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-amber-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-amber-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-300 mb-6">Content for page {pageNumber} is not available.</p>
            <button
              onClick={() => router.push('/manuals/accident-manual')}
              className="bg-linear-to-r from-red-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-amber-900">
      {/* Header Navigation */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/manuals/accident-manual')}
                className="flex items-center space-x-2 bg-linear-to-r from-red-500 to-orange-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-red-600 hover:to-orange-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border border-red-400/30">
                <ul className="space-y-1 text-center">
                  <li className="flex items-center space-x-2">
                    <span className="text-white text-xs lg:text-base">{currentRule ? `Topic : ${currentRule.title}` : 'Topic title not found for this page.'}</span>
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
          <div className="bg-linear-to-r from-red-500 to-orange-600 text-white py-4 px-2">
            <div className="flex items-center justify-center space-x-3">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-center uppercase">Accident Manual</h1>
                <hr className="border-white/20"/>
                <ul className="mt-2 space-y-1 text-center">
                  <li className="flex items-center space-x-2">
                    <span className="text-orange-200">Topic: </span>
                    <span className="text-white font-normal">{currentRule ? currentRule.title : 'Rule title not found for this page.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:p-6 p-1">
            <ContentComponent />
          </div>

          {/* Navigation Buttons */}
          <div className="mt-1 mb-1 p-3">
            <div className="flex items-center justify-between space-x-8">
              {/* Previous */}
              <button
                onClick={() => prevPage && router.push(`/manuals/accident-manual/content/${prevPage}`)}
                disabled={!prevPage}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                  prevPage ? 'bg-linear-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 hover:scale-105' : 'bg-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>Previous</span>
                <hr className="border-white/30 w-full my-1" />
                <span className='text-xs lg:text-sm'>{prevLabel}</span>
              </button>

              {/* Next */}
              <button
                onClick={() => nextPage && router.push(`/manuals/accident-manual/content/${nextPage}`)}
                disabled={!nextPage}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                  nextPage ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105' : 'bg-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>Next</span>
                <hr className="border-white/30 w-full my-1" />
                <span className='text-xs lg:text-sm'>{nextLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 bg-linear-to-tr from-red-600 via-orange-500 to-amber-600 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:from-red-700 hover:to-orange-600 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ContentPage


