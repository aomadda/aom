"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

// Import section components (1-200)
import IRACT1989Section1 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section1'   
import IRACT1989Section2 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section2'
import IRACT1989Section3 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section3'
import IRACT1989Section4 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section4'
import IRACT1989Section5 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section5'
import IRACT1989Section6 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section6'
import IRACT1989Section7 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section7'
import IRACT1989Section8 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section8'
import IRACT1989Section9 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section9'
import IRACT1989Section10 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section10'
import IRACT1989Section11 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section11'
import IRACT1989Section12 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section12'
import IRACT1989Section13 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section13'
import IRACT1989Section14 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section14'
import IRACT1989Section15 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section15'
import IRACT1989Section16 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section16'
import IRACT1989Section17 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section17'
import IRACT1989Section18 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section18'
import IRACT1989Section19 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section19'
import IRACT1989Section20 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section20'
import IRACT1989Section21 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section21'
import IRACT1989Section22 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section22'
import IRACT1989Section23 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section23'
import IRACT1989Section24 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section24'
import IRACT1989Section25 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section25'
import IRACT1989Section26 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section26'
import IRACT1989Section27 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section27'
import IRACT1989Section28 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section28'
import IRACT1989Section29 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section29'
import IRACT1989Section30 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section30'
import IRACT1989Section31 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section31'
import IRACT1989Section32 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section32'
import IRACT1989Section33 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section33'
import IRACT1989Section34 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section34'
import IRACT1989Section35 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section35'
import IRACT1989Section36 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section36'
import IRACT1989Section37 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section37'
import IRACT1989Section38 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section38'
import IRACT1989Section39 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section39'
import IRACT1989Section40 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section40'
import IRACT1989Section41 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section41'
import IRACT1989Section42 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section42'
import IRACT1989Section43 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section43'
import IRACT1989Section44 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section44'
import IRACT1989Section45 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section45'
import IRACT1989Section46 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section46'
import IRACT1989Section47 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section47'
import IRACT1989Section48 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section48'
import IRACT1989Section49 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section49'
import IRACT1989Section50 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section50'
import IRACT1989Section51 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section51'
import IRACT1989Section52 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section52'
import IRACT1989Section53 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section53'
import IRACT1989Section54 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section54'
import IRACT1989Section55 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section55'
import IRACT1989Section56 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section56'
import IRACT1989Section57 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section57'
import IRACT1989Section58 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section58'
import IRACT1989Section59 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section59'
import IRACT1989Section60 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section60'
import IRACT1989Section61 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section61'
import IRACT1989Section62 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section62'
import IRACT1989Section63 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section63'
import IRACT1989Section64 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section64'
import IRACT1989Section65 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section65'
import IRACT1989Section66 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section66'
import IRACT1989Section67 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section67'
import IRACT1989Section68 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section68'
import IRACT1989Section69 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section69'
import IRACT1989Section70 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section70'
import IRACT1989Section71 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section71'
import IRACT1989Section72 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section72'
import IRACT1989Section73 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section73'
import IRACT1989Section74 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section74'
import IRACT1989Section75 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section75'
import IRACT1989Section76 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section76'
import IRACT1989Section77 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section77'
import IRACT1989Section78 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section78'
import IRACT1989Section79 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section79'
import IRACT1989Section80 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section80'
import IRACT1989Section81 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section81'
import IRACT1989Section82 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section82'
import IRACT1989Section83 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section83'
import IRACT1989Section84 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section84'
import IRACT1989Section85 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section85'
import IRACT1989Section86 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section86'
import IRACT1989Section87 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section87'
import IRACT1989Section88 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section88'
import IRACT1989Section89 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section89'
import IRACT1989Section90 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section90'
import IRACT1989Section91 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section91'
import IRACT1989Section92 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section92'
import IRACT1989Section93 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section93'
import IRACT1989Section94 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section94'
import IRACT1989Section95 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section95'
import IRACT1989Section96 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section96'
import IRACT1989Section97 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section97'
import IRACT1989Section98 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section98'
import IRACT1989Section99 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section99'
import IRACT1989Section100 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section100'
import IRACT1989Section101 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section101'
import IRACT1989Section102 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section102'
import IRACT1989Section103 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section103'
import IRACT1989Section104 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section104'
import IRACT1989Section105 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section105'
import IRACT1989Section106 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section106'
import IRACT1989Section107 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section107'
import IRACT1989Section108 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section108'
import IRACT1989Section109 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section109'
import IRACT1989Section110 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section110'
import IRACT1989Section111 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section111'
import IRACT1989Section112 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section112'
import IRACT1989Section113 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section113'
import IRACT1989Section114 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section114'
import IRACT1989Section115 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section115'
import IRACT1989Section116 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section116'
import IRACT1989Section117 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section117'
import IRACT1989Section118 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section118'
import IRACT1989Section119 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section119'
import IRACT1989Section120 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section120'
import IRACT1989Section121 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section121'
import IRACT1989Section122 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section122'
import IRACT1989Section123 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section123'
import IRACT1989Section124 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section124'
import IRACT1989Section125 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section125'
import IRACT1989Section126 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section126'
import IRACT1989Section127 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section127'
import IRACT1989Section128 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section128'
import IRACT1989Section129 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section129'
import IRACT1989Section130 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section130'
import IRACT1989Section131 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section131'
import IRACT1989Section132 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section132'
import IRACT1989Section133 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section133'
import IRACT1989Section134 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section134'
import IRACT1989Section135 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section135'
import IRACT1989Section136 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section136'
import IRACT1989Section137 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section137'
import IRACT1989Section138 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section138'
import IRACT1989Section139 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section139'
import IRACT1989Section140 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section140'
import IRACT1989Section141 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section141'
import IRACT1989Section142 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section142'
import IRACT1989Section143 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section143'
import IRACT1989Section144 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section144'
import IRACT1989Section145 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section145'
import IRACT1989Section146 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section146'
import IRACT1989Section147 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section147'
import IRACT1989Section148 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section148'
import IRACT1989Section149 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section149'
import IRACT1989Section150 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section150'
import IRACT1989Section151 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section151'
import IRACT1989Section152 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section152'
import IRACT1989Section153 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section153'
import IRACT1989Section154 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section154'
import IRACT1989Section155 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section155'
import IRACT1989Section156 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section156'
import IRACT1989Section157 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section157'
import IRACT1989Section158 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section158'
import IRACT1989Section159 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section159'
import IRACT1989Section160 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section160'
import IRACT1989Section161 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section161'
import IRACT1989Section162 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section162'
import IRACT1989Section163 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section163'
import IRACT1989Section164 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section164'
import IRACT1989Section165 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section165'
import IRACT1989Section166 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section166'
import IRACT1989Section167 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section167'
import IRACT1989Section168 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section168'
import IRACT1989Section169 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section169'
import IRACT1989Section170 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section170'
import IRACT1989Section171 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section171'
import IRACT1989Section172 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section172'
import IRACT1989Section173 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section173'
import IRACT1989Section174 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section174'
import IRACT1989Section175 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section175'
import IRACT1989Section176 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section176'
import IRACT1989Section177 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section177'
import IRACT1989Section178 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section178'
import IRACT1989Section179 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section179'
import IRACT1989Section180 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section180'
import IRACT1989Section181 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section181'
import IRACT1989Section182 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section182'
import IRACT1989Section183 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section183'
import IRACT1989Section184 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section184'
import IRACT1989Section185 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section185'
import IRACT1989Section186 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section186'
import IRACT1989Section187 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section187'
import IRACT1989Section188 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section188'
import IRACT1989Section189 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section189'
import IRACT1989Section190 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section190'
import IRACT1989Section191 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section191'
import IRACT1989Section192 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section192'
import IRACT1989Section193 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section193'
import IRACT1989Section194 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section194'
import IRACT1989Section195 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section195'
import IRACT1989Section196 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section196'
import IRACT1989Section197 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section197'
import IRACT1989Section198 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section198'
import IRACT1989Section199 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section199'
import IRACT1989Section200 from '@/components/indian-railways-act-1989/ir-act-index-sections/IRACT1989Section200'

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const sectionNumber = params.section as string
  const [showScrollTop, setShowScrollTop] = useState(false)

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

  // Map section numbers to components
  const sectionComponents: { [key: string]: React.ComponentType } = {
    '1': IRACT1989Section1,
    '2': IRACT1989Section2,
    '3': IRACT1989Section3,
    '4': IRACT1989Section4,
    '5': IRACT1989Section5,
    '6': IRACT1989Section6,
    '7': IRACT1989Section7,
    '8': IRACT1989Section8,
    '9': IRACT1989Section9,
    '10': IRACT1989Section10,
    '11': IRACT1989Section11,
    '12': IRACT1989Section12,
    '13': IRACT1989Section13,
    '14': IRACT1989Section14,
    '15': IRACT1989Section15,
    '16': IRACT1989Section16,
    '17': IRACT1989Section17,
    '18': IRACT1989Section18,
    '19': IRACT1989Section19,
    '20': IRACT1989Section20,
    '21': IRACT1989Section21,
    '22': IRACT1989Section22,
    '23': IRACT1989Section23,
    '24': IRACT1989Section24,
    '25': IRACT1989Section25,
    '26': IRACT1989Section26,
    '27': IRACT1989Section27,
    '28': IRACT1989Section28,
    '29': IRACT1989Section29,
    '30': IRACT1989Section30,
    '31': IRACT1989Section31,
    '32': IRACT1989Section32,
    '33': IRACT1989Section33,
    '34': IRACT1989Section34,
    '35': IRACT1989Section35,
    '36': IRACT1989Section36,
    '37': IRACT1989Section37,
    '38': IRACT1989Section38,
    '39': IRACT1989Section39,
    '40': IRACT1989Section40,
    '41': IRACT1989Section41,
    '42': IRACT1989Section42,
    '43': IRACT1989Section43,
    '44': IRACT1989Section44,
    '45': IRACT1989Section45,
    '46': IRACT1989Section46,
    '47': IRACT1989Section47,
    '48': IRACT1989Section48,
    '49': IRACT1989Section49,
    '50': IRACT1989Section50,
    '51': IRACT1989Section51,
    '52': IRACT1989Section52,
    '53': IRACT1989Section53,
    '54': IRACT1989Section54,
    '55': IRACT1989Section55,
    '56': IRACT1989Section56,
    '57': IRACT1989Section57,
    '58': IRACT1989Section58,
    '59': IRACT1989Section59,
    '60': IRACT1989Section60,
    '61': IRACT1989Section61,
    '62': IRACT1989Section62,
    '63': IRACT1989Section63,
    '64': IRACT1989Section64,
    '65': IRACT1989Section65,
    '66': IRACT1989Section66,
    '67': IRACT1989Section67,
    '68': IRACT1989Section68,
    '69': IRACT1989Section69,
    '70': IRACT1989Section70,
    '71': IRACT1989Section71,
    '72': IRACT1989Section72,
    '73': IRACT1989Section73,
    '74': IRACT1989Section74,
    '75': IRACT1989Section75,
    '76': IRACT1989Section76,
    '77': IRACT1989Section77,
    '78': IRACT1989Section78,
    '79': IRACT1989Section79,
    '80': IRACT1989Section80,
    '81': IRACT1989Section81,
    '82': IRACT1989Section82,
    '83': IRACT1989Section83,
    '84': IRACT1989Section84,
    '85': IRACT1989Section85,
    '86': IRACT1989Section86,
    '87': IRACT1989Section87,
    '88': IRACT1989Section88,
    '89': IRACT1989Section89,
    '90': IRACT1989Section90,
    '91': IRACT1989Section91,
    '92': IRACT1989Section92,
    '93': IRACT1989Section93,
    '94': IRACT1989Section94,
    '95': IRACT1989Section95,
    '96': IRACT1989Section96,
    '97': IRACT1989Section97,
    '98': IRACT1989Section98,
    '99': IRACT1989Section99,
    '100': IRACT1989Section100,
    '101': IRACT1989Section101,
    '102': IRACT1989Section102,
    '103': IRACT1989Section103,
    '104': IRACT1989Section104,
    '105': IRACT1989Section105,
    '106': IRACT1989Section106,
    '107': IRACT1989Section107,
    '108': IRACT1989Section108,
    '109': IRACT1989Section109,
    '110': IRACT1989Section110,
    '111': IRACT1989Section111,
    '112': IRACT1989Section112,
    '113': IRACT1989Section113,
    '114': IRACT1989Section114,
    '115': IRACT1989Section115,
    '116': IRACT1989Section116,
    '117': IRACT1989Section117,
    '118': IRACT1989Section118,
    '119': IRACT1989Section119,
    '120': IRACT1989Section120,
    '121': IRACT1989Section121,
    '122': IRACT1989Section122,
    '123': IRACT1989Section123,
    '124': IRACT1989Section124,
    '125': IRACT1989Section125,
    '126': IRACT1989Section126,
    '127': IRACT1989Section127,
    '128': IRACT1989Section128,
    '129': IRACT1989Section129,
    '130': IRACT1989Section130,
    '131': IRACT1989Section131,
    '132': IRACT1989Section132,
    '133': IRACT1989Section133,
    '134': IRACT1989Section134,
    '135': IRACT1989Section135,
    '136': IRACT1989Section136,
    '137': IRACT1989Section137,
    '138': IRACT1989Section138,
    '139': IRACT1989Section139,
    '140': IRACT1989Section140,
    '141': IRACT1989Section141,
    '142': IRACT1989Section142,
    '143': IRACT1989Section143,
    '144': IRACT1989Section144,
    '145': IRACT1989Section145,
    '146': IRACT1989Section146,
    '147': IRACT1989Section147,
    '148': IRACT1989Section148,
    '149': IRACT1989Section149,
    '150': IRACT1989Section150,
    '151': IRACT1989Section151,
    '152': IRACT1989Section152,
    '153': IRACT1989Section153,
    '154': IRACT1989Section154,
    '155': IRACT1989Section155,
    '156': IRACT1989Section156,
    '157': IRACT1989Section157,
    '158': IRACT1989Section158,
    '159': IRACT1989Section159,
    '160': IRACT1989Section160,
    '161': IRACT1989Section161,
    '162': IRACT1989Section162,
    '163': IRACT1989Section163,
    '164': IRACT1989Section164,
    '165': IRACT1989Section165,
    '166': IRACT1989Section166,
    '167': IRACT1989Section167,
    '168': IRACT1989Section168,
    '169': IRACT1989Section169,
    '170': IRACT1989Section170,
    '171': IRACT1989Section171,
    '172': IRACT1989Section172,
    '173': IRACT1989Section173,
    '174': IRACT1989Section174,
    '175': IRACT1989Section175,
    '176': IRACT1989Section176,
    '177': IRACT1989Section177,
    '178': IRACT1989Section178,
    '179': IRACT1989Section179,
    '180': IRACT1989Section180,
    '181': IRACT1989Section181,
    '182': IRACT1989Section182,
    '183': IRACT1989Section183,
    '184': IRACT1989Section184,
    '185': IRACT1989Section185,
    '186': IRACT1989Section186,
    '187': IRACT1989Section187,
    '188': IRACT1989Section188,
    '189': IRACT1989Section189,
    '190': IRACT1989Section190,
    '191': IRACT1989Section191,
    '192': IRACT1989Section192,
    '193': IRACT1989Section193,
    '194': IRACT1989Section194,
    '195': IRACT1989Section195,
    '196': IRACT1989Section196,
    '197': IRACT1989Section197,
    '198': IRACT1989Section198,
    '199': IRACT1989Section199,
    '200': IRACT1989Section200
  }

  const ContentComponent = sectionComponents[sectionNumber]

  const openPDF = () => {
    const pdfFileName = `IRACT1989SECTION${sectionNumber}.pdf`
    const pdfPath = `/indian-railways-act-1989/${pdfFileName}`
    window.open(pdfPath, '_blank')
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Section Not Found</h1>
            <p className="text-gray-300 mb-6">Content for Section {sectionNumber} is not available.</p>
            <button
              onClick={() => router.push('/acts/indian-railways-act-1989')}
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Header Navigation */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/acts/indian-railways-act-1989')}
                className="flex items-center space-x-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border border-blue-400/30">
              <p className="text-white text-xs lg:text-base text-center">
                Topic : Section {sectionNumber}
              </p>
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
        <ContentComponent />

        {/* Navigation Buttons */}
        <div className="mt-6 mb-6 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
          <div className="flex items-center justify-between space-x-8">
            {/* Previous Section Button */}
            <button
              onClick={() => {
                const currentSecNum = parseInt(sectionNumber)
                const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availableSections.indexOf(currentSecNum)

                if (currentIndex > 0) {
                  const prevSection = availableSections[currentIndex - 1]
                  router.push(`/acts/indian-railways-act-1989/content/${prevSection}`)
                }
              }}
              disabled={(() => {
                const currentSecNum = parseInt(sectionNumber)
                const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availableSections.indexOf(currentSecNum)
                return currentIndex <= 0
              })()}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                (() => {
                  const currentSecNum = parseInt(sectionNumber)
                  const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                  const currentIndex = availableSections.indexOf(currentSecNum)
                  return currentIndex > 0
                })()
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Previous
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {(() => {
                  const currentSecNum = parseInt(sectionNumber)
                  const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                  const currentIndex = availableSections.indexOf(currentSecNum)

                  if (currentIndex > 0) {
                    const prevSection = availableSections[currentIndex - 1]
                    return `Section ${prevSection}`
                  }
                  return "Previous"
                })()}
              </span>
            </button>

            {/* Next Section Button */}
            <button
              onClick={() => {
                const currentSecNum = parseInt(sectionNumber)
                const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availableSections.indexOf(currentSecNum)

                if (currentIndex < availableSections.length - 1) {
                  const nextSection = availableSections[currentIndex + 1]
                  router.push(`/acts/indian-railways-act-1989/content/${nextSection}`)
                }
              }}
              disabled={(() => {
                const currentSecNum = parseInt(sectionNumber)
                const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availableSections.indexOf(currentSecNum)
                return currentIndex >= availableSections.length - 1
              })()}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                (() => {
                  const currentSecNum = parseInt(sectionNumber)
                  const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                  const currentIndex = availableSections.indexOf(currentSecNum)
                  return currentIndex < availableSections.length - 1
                })()
                  ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Next
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {(() => {
                  const currentSecNum = parseInt(sectionNumber)
                  const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                  const currentIndex = availableSections.indexOf(currentSecNum)

                  if (currentIndex < availableSections.length - 1) {
                    const nextSection = availableSections[currentIndex + 1]
                    return `Section ${nextSection}`
                  }
                  return "Next"
                })()}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 bg-linear-to-tr from-blue-600 via-blue-400 to-blue-700 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
          aria-label="Scroll to top"
        >
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

