'use client'

import React from 'react'

interface Timing {
  question: string
  answer: string
  timing?: string
}

const TimingsWisePage = () => {
  const timings: Timing[] = [
    { question: 'How often do the Station Kavach and Loco Kavach units communicate with each other?', answer: 'every 2 seconds', timing: '2 seconds' },

    { question: 'What is the timeout period for radio communication failure in an Automatic Block Section before KAVACH takes action?', answer: '10 seconds', timing: '10 seconds' },

    { question: 'In the Siemen\'s panel \'NCR\' indication along with audible warning appears after a button is kept pressed for a prolonged period of', answer: '10 seconds or more', timing: '10 seconds' },

    { question: 'When acknowledgement cannot be obtained for ‘Call attention’ bell beat, again Call attention shall be given by SM after_____', answer: '20 seconds', timing: '20 seconds' },
    { question: 'KAVACH automatically transition from Full Supervision (FS) mode to Limited Supervision Mode (LS) if radio communication is lost for ________ seconds in an Absolute Block Section?', answer: '30 seconds', timing: '30 seconds' },
    
    { question: 'During day when Gate signal is at ON, the LP shall wait for', answer: '1 minute', timing: '1 minute' },
    { question: 'The signal shall be treated as defective, whenever colour light signal is flickering / bobbing and does not assume a steady aspect at least for', answer: '60 seconds', timing: '1 minute' },
    
    { question: 'When the Loco Pilot notices a signal warning of an obstruction other than detonators and no further details are noticed, shall stop the train immediately and wait during day/night for 1/2 minutes cautiously proceed up to next block station', answer: 'one/two minute', timing: '1/2 minutes' },
    
    { question: 'During night when Gate signal is at ON, the LP shall wait for', answer: '2 minutes', timing: '2 minutes' },
    { question: 'For Originating and passing through trains, Handing over by more than ______ minutes at interchange point.', answer: '3 minutes', timing: '3 minutes' },
    
    { question: 'When a train is held up at F S S, the Loco Pilot shall depute Assistant Loco Pilot to go to Station. After', answer: '5 minutes', timing: '5 minutes' },

    { question: 'When IBS is at "ON" and the telephone is out of order, Loco Pilot shall wait for', answer: '5 minutes', timing: '5 minutes' },

    { question: 'When engine disabled, LP will request the Guard to arrange for a relief engine if the LP expects that putting the engine in working order will take more than', answer: '5 minutes', timing: '5 minutes' },

    { question: 'LP shall depute his ALP to check the train and inform Guard of no tension in OHE when it is held up for more than', answer: '5 Minutes', timing: '5 minutes' },

    { question: 'At train starting station \'is line clear\' shall be asked, how many minutes before the booked departure of the passenger carrying trains', answer: 'before 5 min', timing: '5 minutes' },

    { question: 'In Modified Semi-automatic stop signal, when Loco Pilot finds mid-section modified semi-automatic stop signal with "A" marker extinguished in "ON" position, when Loco Pilot is unable to contact the Station Master of station ahead, he shall pass the signal at "ON" ______________ and proceed cautiously and be prepared to stop short of any obstruction, at a speed not exceeding 10 kmph upto next Signal.', answer: 'After waiting for 5 minutes at the signal', timing: '5 minutes' },
    
    { question: 'For Sub-urban trains, punctuality of the train is lost when it arrives more than ______ minutes late at destination.', answer: '5 minutes', timing: '5 minutes' },

    { question: 'Generally no passenger train should arrive at a junction and important station more than ______ minutes before scheduled time', answer: '5 minutes', timing: '5 minutes' },

    { question: 'In the case of train is booked to run through a station, is line clear shall be asked how many minutes before the train is due to pass', answer: '7 minutes', timing: '7 minutes' },
    
    { question: 'Before the arrival of the train, to avoid complaints from road user, taking off the approach signals can be delayed to ensure that gate is closed only for', answer: '10 minutes', timing: '10 minutes' },

    { question: 'During TIC on Double line, if train held up at FSS, if no one from the station turns up Guard shall protect the train in rear and ALP may be sent to station after', answer: '10 minutes', timing: '10 minutes' },

    { question: 'EMU/MEMU shall be protected as per Rule 6.03/9.10, If the detention exceeds or it is likely to exceed', answer: '10 minutes', timing: '10 minutes' },

    { question: 'During Tottal Interruption of Communication (TIC) on Double line, if train held up at FSS, if no one from the station turns up Guard shall protect the train in rear and ALP may be sent to station after______ minutes', answer: '10 minutes', timing: '10 minutes' },
    
    { question: 'If a passenger train/goods train does not turn up, S M shall arrange to send competent railway servant even after normal running time and', answer: '10/20 minutes', timing: '10/20 minutes' },
    { question: 'The Gds/LPs of all trains who are provided with VHF sets and Portable Field telephone shall inform the Station Master/controller when delayed in the block section for over', answer: '10 / 20 min for passenger carrying/goods trains', timing: '10/20 minutes' },
    
    { question: 'In Following train, Pilot Guard, Train staff & ticket systems, a train shall follow another from a station unless there has elapsed, an interval of not less than_______, or such shorter interval as may be fixed by special instructions', answer: '15 minutes', timing: '15 minutes' },

    { question: 'The Guard shall protect in rear when a train is held up at First Stop Signal for more than', answer: '15 minutes', timing: '15 minutes' },

    { question: 'If for any reason, a train is brought to a stand, the hand brakes of Locomotive and formation brakes shall be applied for more than if stoppage is more than', answer: '15 minutes', timing: '15 minutes' },

    { question: 'For Intra Zonal and Terminating trains, train arriving more than ______ minutes late at destination.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'If a Patrolman does not turn up within ________ minutes of his/her scheduled arrival, the Station Master shall stop run through trains proceeding into the block section. Issue a Caution Order to all trains proceeding into the block section advising the Loco Pilot to be alert and specify a speed restriction of 40 kmph.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'If, for any reason, a train is brought to a stand for a period longer than ______ minutes, the hand brakes of the locomotive shall be applied in addition to the application of air brake etc.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'Guards of Suburban trains shall report for duty at least ______ minutes before the scheduled departure of the train.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'In The Following Trains System, The Pilot Guard System, The Train Staff & Ticket Systems, a train shall be allowed to follow another from a station unless there has elapsed, an interval of not less than_____, or such shorter interval as may be fixed by special instructions.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'To treat as equipment failure, a gate telephone shall fail for more than ______ minutes.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'The target time for turning out Medical Relief Train (MRT) for direct/indirect dispatch, is ________', answer: '15/20 minutes', timing: '15/20 minutes' },
    
    { question: 'The time interval between two trains during signal and communication failure on Double line Automatic Block System shall be______', answer: '25 minutes', timing: '25 minutes' },
    
    { question: 'When trains are dealt on T/C 602, the time interval between two trains shall be', answer: '30 minutes', timing: '30 minutes' },

    { question: 'Line clear may be given on information from Fog Signalman or 30 minutes from departure of Fog Signalman.', answer: '30 minutes', timing: '30 minutes' },

    { question: 'A relief engine should be sent, if the engine or vehicles running away have not arrived even after a lapse of how many minutes more than the running time of the slowest speed goods train', answer: '30 minutes', timing: '30 minutes' },

    { question: 'Before the passage of VIP special patrolling is done at least', answer: '30 mins before', timing: '30 minutes' },
    { question: 'A train running to time should not be detained more than ______ minutes to effect crossing on Single Line.', answer: '30 minutes', timing: '30 minutes' },

    { question: 'Passenger Guards must report for duty at least 30 minutes before the scheduled departure of the train.', answer: '30 mins before', timing: '30 minutes' },

    { question: 'The target time for turning out Accident Relief Train (ART) during day/night is_______', answer: '30/45 minutes', timing: '30/45 minutes' },

    { question: 'In the case of Goods trains originating from a terminal yard, the Guards shall appear on duty at least 45 minutes before the departure of the train is scheduled to leave.', answer: 'at least 45 mins before', timing: '45 minutes' },

    { question: 'Every Loco Pilot and ALP shall "sign on" ________ minutes in advance for examining and taking over the Multiple Unit Electric Engine in the shed.', answer: '45 minutes', timing: '45 minutes' },

    { question: 'Every Loco pilot and ALP shall "Sing ON" _____ minutes in advance for examining and taking over the Multiple Unit Electric Engine in the shed.', answer: '45 minutes', timing: '45 minutes' },
    
    { question: 'Depending upon trains in the section Disconnection should normally be allowed by SM for duration up to', answer: '60 minutes', timing: '60 minutes' },
    
    { question: 'VHF sets as a means of communication should be permitted only in the presence of supervisory staff for prolonged duration of', answer: '3 hours or more', timing: '3 hours' },

    { question: 'Threshold values for interruption to through traffic: For BG (Broad Gauge) A, B, C or D Special routes: ______ hours for total interruption', answer: '3 hours', timing: '3 hours' },

    { question: 'In case of EOL scheme, free time for loading of BOXN rake is _______hrs.', answer: '3 hours', timing: '3 hours' },

    { question: 'When power supply fails in Non-electrified area, one generator can be used at a time for a maximum of________', answer: '4 hours', timing: '4 hours' },

    { question: 'The powers to grant traffic blocks up to ______ hours have been given to DRM', answer: '4 hours', timing: '4 hours' },

    { question: 'Threshold values for interruption to through traffic: For BG D, E Special or MG (Meter Gauge) Q, R routes: ______ hours for total interruption', answer: '4 hours', timing: '4 hours' },

    { question: 'At least ___________ hours prior to the planned departure of CONCOR‘s Train, the CONCOR shall submit an indent (―Indent for Locomotive‖) for supply of locomotive.', answer: '4 hours', timing: '4 hours' },

    { question: 'Time required for preparatory and complementary work by a running staff shall be deemed to be _______ a week', answer: '4 hours', timing: '4 hours' },

    { question: 'The powers to grant traffic blocks upto _____ hours have been given to DRM.', answer: '4 hours', timing: '4 hours' },

    { question: 'Free time for unloading of BTPN type of wagons under Engine on Load scheme is ______ hours', answer: '5 hours', timing: '5 hours' },

    { question: 'In case of EOL scheme, free time for un-loading of BOXN rake is _______ hrs.', answer: '5 hours', timing: '5 hours' },

    { question: 'Free time for unloading of BCN type of wagons under Engine on Load scheme is ______ hours', answer: '6 hours', timing: '6 hours' },

    { question: 'On trunk routes when traffic is disrupted for following hours or more, it is treated as serious dislocation of traffic.', answer: '6 hours', timing: '6 hours' },

    { question: 'The maximum time slot allotted for Primary maintenance of coaching rake', answer: '6 hours', timing: '6 hours' },

    { question: 'Out station rest for a Running staff performing less than 8 hours duty is ______ hours', answer: '6 hours', timing: '6 hours' },

    { question: 'What is the minimum compulsory rest without duty?', answer: '6 hours', timing: '6 hours' },

    { question: 'Threshold values for interruption to through traffic: For BG (Broad Gauge) A, B, C or D Special routes: ______ hours  for total + partial interruption', answer: '6 hours', timing: '6 hours' },

    { question: 'Threshold values for interruption to through traffic: For BG E or MG S routes: ______ hours for total interruption', answer: '6 hours', timing: '6 hours' },

    { question: 'Railway Administration shall normally complete the intensive train examination within a period of _________ hoursfrom the time the CONCOR‘s Wagons (in empty Rake formation) are handed over by the CONCOR for such examination', answer: '6 hours', timing: '6 hours' },

    { question: 'In case of EOL scheme, free time for loading of covered rake is _______ hrs.', answer: '6 hours', timing: '6 hours' },

    { question: 'In case of EOL scheme, free time for un-loading of covered rake is _______ hrs.', answer: '6 hours', timing: '6 hours' },

    { question: 'No Railway Servant directly concerned with the working of trains shall take or use any alcoholic drink, sedative, narcotic or stimulant drug or preparation within ________ hours before the commencement of his duty or take or use any such drink, drugh or preparation when on duty.', answer: '8 hours', timing: '8 hours' },

    { question: 'Control chart is prepared normally for ______ hours', answer: '8 hours', timing: '8 hours' },

    { question: 'For Loco pilots of all Mail/Express trains, the runnung duty (for the purpose of preparation links only) should not exceed ______ hours.', answer: '8 hours', timing: '8 hours' },

    { question: 'If duty outside Headquarters exceeds 8 hours, how much rest is given?', answer: '8 hours', timing: '8 hours' },

    { question: 'Out station rest for Guard performing more than 10 hours duty is ______ hours', answer: '8 hours', timing: '8 hours' },

    { question: 'To ensure that bona fide use of waiting rooms is being made, they shall be checked by a ticket checking staff every ________ hours', answer: '8 hours', timing: '8 hours' },

    { question: 'Threshold values for interruption to through traffic: For BG D, E Special or MG (Meter Gauge) Q, R routes: ______ hours for total + partial interruption.', answer: '8 hours', timing: '8 hours' },

    { question: 'Running duty at a stretch should not ordinarily exceed _____ hours from the departure of the train.', answer: '9 hours', timing: '9 hours' },

    { question: 'F ree time for loading / unloading of BCN /BCNA rake is ______ hours', answer: '9 hours', timing: '9 hours' },

    { question: 'What is the working hour per day under the Factory Act?', answer: '48 hours', timing: '48 hours' },

    { question: 'The maximum duty hours in any one trip should not exceed ______ hours.', answer: '10 hours', timing: '10 hours' },

    { question: 'Total duty at a stretch of running staff from "sign-on" to "sign-off" should not generally exceed _____ hours.', answer: '11 hours', timing: '11 hours' },

    { question: 'If duty hours are less than 8 hours, how much rest is given at Headquarters?', answer: '12 hours', timing: '12 hours' },

    { question: 'Threshold values for interruption to through traffic: For BG E or MG S routes: ______ hours for total + partial interruption.', answer: '12 hours', timing: '12 hours' },

    { question: 'No Railway Servant classified as intensive shall be called upon to duty before completion of rest of ______ hours', answer: '12 hours', timing: '12 hours' },

    { question: 'Permissible free time for use of ground for dealing with container train for type II goods shed is ______ hours', answer: '15 hours', timing: '15 hours' },

    { question: 'If duty hours are more than 8 hours, how much rest is given at Headquarters?', answer: '16 hours', timing: '16 hours' },


    { question: 'Subject to exigencies of service, Headquarters rest of all Running staff will be ______ hours irrespective of the duration of their incoming trip.', answer: '16 hours', timing: '16 hours' },
    
    { question: 'If a BPC Rake (CC, Premium, or End-to-End) is stabled for more than _______ hours at a TXR yard, BPC becomes invalid.', answer: '24 hours', timing: '24 hours' },

    { question: 'Fresh B P C is required when train is stabled at station other than loading and unloading station for more than _____ hours', answer: '24 hours', timing: '24 hours' },

    { question: 'Rusty” rail caps are to be placed when any line is not used for more than ______ hours.', answer: '24 hours', timing: '24 hours' },

    { question: 'Master chart is prepared normally for ______ hours', answer: '24 hours', timing: '24 hours' },

    { question: 'Loco outage means the average number of locos available to traffic use in ______ hours', answer: '24 hours', timing: '24 hours' },

    { question: 'Throughput of a section is given as the volume of traffic carried over a section in ______ hours', answer: '24 hours', timing: '24 hours' },

    { question: 'Rough Assessment method of Job Analysis is conducted for -------- hours?', answer: '24 hours', timing: '24 hours' },

    { question: 'Weekly rest for Essentially Intermittent workers is _____ hrs including a full night in bed', answer: '24 hours', timing: '24 hours' },

    { question: 'Temporary Instructions shall be issued for Disconnections / maintenance likely to last for more than', answer: 'one day', timing: '1 day' },

    { question: 'How many days leave can be sanctioned for an employee who donated the blood?', answer: '1 day', timing: '1 day' },

    { question: 'Minimum number of days from the date of accident ‘D’, DRM/GM to order enquiry to be done within is _____', answer: 'D + 1 day', timing: '1 day' },

    { question: 'What is the duration for Hindi conversation course?', answer: '30 hours', timing: '30 hours' },

    { question: 'There will be no change in the existing provisition for Periodical Rest (PR). However, preference should be given to Periodical Rest for 4 periods of 30 hours or 5 periods of 22 hours.', answer: '4 periods of 30 hours or 5 periods of 22 hours', timing: '30 hours' },

    { question: 'Weekly rest of not less than _______ is granted to Railway Servant whose employment is classified as Essentially Intermittent', answer: '24 consecutive hrs', timing: '24 hours' },

    { question: 'Weekly rest of not less than _______ is granted to Railway Servant whose employment is classified as Intensive', answer: '30 consecutive hrs', timing: '30 hours' },

    { question: 'Weekly rest of not less than _______ is granted to Railway Servant whose employment is classified as continuous', answer: '30 consecutive hrs', timing: '30 hours' },

    { question: 'What is the statutory limit of hours of employment of Intensive Category employee in a week?', answer: '45 hours', timing: '45 hours' },

    { question: 'Explosives and other dangerous goods should be brought to railway premises only after giving anotice of hours.', answer: '48 hours', timing: '48 hours' },

    { question: 'A person will be considered to have incurred simple injuries, if these injuries incapacitate the injured person from pursuing his customary vocation for ___after the occurrence of the accident.', answer: '48 hours', timing: '48 hours' },

    { question: 'A railway employee is considered to have been injured if he/she is prevented from returning to work as a result of injuries for a period of ____ after the occurrence of the accident.', answer: '48 hours', timing: '48 hours' },

    { question: 'A Railway servant shall be deemed to have been placed under suspension by an order of the competent authority - With effect from the date of his detention, if he is detained in custody, whether on a criminal charge or otherwise, for a period exceeding ______ hours', answer: '48 hours', timing: '48 hours' },

    { question: 'A Railway servant shall be deemed to have been placed under suspension by an order of the competent authority - with effect from the date of his conviction, if in the event of a conviction for an offence, he is sentenced to a term of imprisonment exceeding ______ hours and is not forthwith dismissed or removed or compulsorily retired consequent to such conviction.', answer: '48 hours', timing: '48 hours' },

    { question: 'All payments as advised by IRCTC for booking of Train/coach on FTR shall be made in advance of ___________ commencement of journey', answer: '48 hours', timing: '48 hours' },

    { question: 'What is the working hour per week under the Factory Act', answer: '48 hours', timing: '48 hours' },

    { question: 'Every portion of the permanent way shall be inspected daily on foot by some railway servant by approved special instructions be increased to ____in the case of lines with light and infrequent traffic.', answer: 'once in two days', timing: '2 days' },

    { question: 'Irrespective of whether a joint or Inter departmental Inquiry is ordered by the General Manager, Sr.DSO of the division shall be advised within _______by the other divisional officers whether their department is accepting responsibility or not.', answer: '2 days', timing: '2 days' },

    { question: 'How many Restricted Holiday (RH) the workshop staff can avail in a year?', answer: '2 days', timing: '2 days' },

    { question: 'Weekly Hours of duty including P&C of Continuous category of employees is------- Hours', answer: '54 hours', timing: '54 hours' },
    
    { question: 'After issuing circular notice, how many days in advance, the DOM will issue an all concerned message', answer: '2 days', timing: '2 days' },

    { question: 'When a Joint or Interdepartmental inquiry is ordered by the GM, the inquiry shall be held at station nearest to the site of accident and within ________after the occurrence of accident.', answer: '3 days', timing: '3 days' },

    { question: 'Station Master may permit Learning duties at Medium stations & Road side station on first posting or when there is change of system/means of working of trains', answer: '3 days', timing: '3 days' },

    { question: 'The GM can sanction NI Working up to ______ days subject to certain conditions', answer: '3 days', timing: '3 days' },

    { question: 'How many days special Casual Leave may be given for participation in PNM', answer: '3 days', timing: '3 days' },

    { question: 'The GM can sanction NI Working up to ______ days subject to certain conditions', answer: '3 days', timing: '3 days' },

    { question: 'The limit of stay away from Headquarters for Running staff should be fixed at ______ hours.', answer: '72 hours', timing: '72 hours' },

    { question: 'What is the limit for weekly working hours for (EI) Essential intermittent class?', answer: '75 hours', timing: '75 hours' },

    { question: 'Minimum number of days from the date of accident ‘D’, commencement of enquiry to be done within is ______', answer: 'D + 3 days', timing: '3 days' },

    { question: 'When must an Empty End-to-End Rake reach the loading point from the time of BPC issue, otherwise a fresh BPC is required?', answer: 'Within 4 days', timing: '4 days' },

    { question: 'Station Master may permit Learning duties at Large stations or junction stations on first posting or when there is change of system/means of working of trains', answer: '5 days', timing: '5 days' },

    { question: 'Point to be kept in view while preparing loco pilot link, average duty hours in a fortnight should not exceed ______ hours', answer: '104 hours', timing: '104 hours' },

    { question: 'Subject to exigencies of services, a maximum limit of ______ duty hours per fortnight should be laid down for all Running staff.', answer: '125 hours', timing: '125 hours' },

    { question: 'How many days Special Casual Leave (SCL) is granted to Male employees for sterilization operation?', answer: '6 days', timing: '6 days' },

    { question: 'The BPC of DEMU 700 HP trains is valid for ______', answer: '7 days', timing: '7 days' },

    { question: 'Minimum number of days from the date of accident ‘D’, submission of enquiry report to be done within is _____', answer: 'D + 7 days', timing: '7 days' },

    { question: 'How many days of Special Casual Leave (SCL) can be given on the sterilization operation of the railway worker\'s wife?', answer: '7 days', timing: '7 days' },

    { question: 'Minimum notice period for quotation is ______ days', answer: '7 days', timing: '7 days' },

    { question: 'How many days Special Casual Leave (SCL) is granted to Female employees when her husband undergoes sterilization operation?', answer: '7 days', timing: '7 days' },

    { question: 'How many days Special Casual Leave (SCL) is granted to Male employees when his wife undergoes sterilization operation?', answer: '7 days', timing: '7 days' },

    { question: 'Within _____________ days of completion of NI, a brain storming session should be held with all the senior supervisors involved for taking stock of lessons learnt.', answer: '7 days', timing: '7 days' },

    { question: 'Station Master may permit Learning duties at Terminal stations with marshalling yard and lobby on first posting or when there is change of system/means of working of trains ______', answer: '8 days', timing: '8 days' },

    { question: 'How many days Casual Leave (CL) can be granted to a clerical staff in a year?', answer: '8 days', timing: '8 days' },

    { question: 'The BPC of DEMU other than 700 HP trains is valid for ______', answer: '10 days', timing: '10 days' },

    { question: 'Station Master may permit Learning duties at Junction stations with marshalling yard and lobby on first posting or when there is change of system/means of working of trains', answer: '10 days', timing: '10 days' },

    { question: 'Minimum number of days from the date of accident ‘D’, acceptance of enquiry report to be done within is _____', answer: 'D + 10 days', timing: '10 days' },

    { question: 'The time-limit for drawal of LTC advance is 125 days for journeys by train. It is mandatory for the Government servant to produce the outward journey tickets to the Competent Authority within ______ days of advance drawal.', answer: '10 days', timing: '10 days' },

    { question: 'What is the time limit given to a male employee to reply against the compliant of Sexual Harassment?', answer: '10 days', timing: '10 days' },

    { question: 'The validity of Premium rake BPC is ______', answer: '12 days', timing: '12 days' },

    { question: 'BPC of a material train is valid for 30 days subject to examination of the train by TXR in case of UIC rakes once in', answer: 'fortnight', timing: 'Fortnight' },

    { question: 'No Railway servant in respect of whom an exemption has been made under rule shall be required to work for more than ______ days without a period of rest and shall be provided with compensatory rest within this period.', answer: '14 days', timing: '14 days' },

    { question: 'No NI working should last for more than________ days.', answer: '14 days', timing: '14 days' },

    { question: 'How many Casual Leaves (CL) is allowed for a Disabled employee?', answer: '14 days', timing: '14 days' },

      { question: 'How many days Special Casual Leave (SCL) is granted to Female employees for sterilization operation?', answer: '14 days', timing: '14 days' },

      { question: 'M inimum notice period for inviting Limited / Special limited tenders', answer: '14 days', timing: '14 days' },
    
    { question: 'LP/ALP/Guard should record in the register maintained in crew booking point about the lapse of road learning in a section in advance of', answer: '15 days', timing: '15 days' },

    { question: 'Engineering and S&T officials shall send a circular notice before the work is due to commence to the Sr. DOM/DOM at least', answer: '15 days in advance', timing: '15 days' },

    { question: 'Minimum number of days from the date of accident ‘D’, finalization of enquiry report by CSO/AGM to be done within is _____', answer: 'D + 15 days', timing: '15 days' },

    { question: 'Detailed working instructions clearly specifying the zone of responsibility of each and every staff and supervisor, along with temporary working instructions, must be issued at least ___________ in advance of NI working', answer: '15 days', timing: '15 days' },

    { question: 'What is the maximum of Special Casual Leave (SCL) in a calendar year that can be granted to the delegates of members of Co-operative Societies to attend the meetings of the Society?', answer: '15 days', timing: '15 days' },
    { question: 'For how many days is cancellation of indent not permitted after advance stacking permission is granted?', answer: '15 days', timing: '15 days' },

    { question: 'A Loco pilot/Assistant loco pilot should record in the register _____ days in advance that he is lapsing road learning in a section.', answer: '15 days', timing: '15 days' },

    { question: 'The validity of material train BPC in case of UIC rakes subject to examination of the train by TXR once in a fortnight is', answer: '20 days', timing: '20 days' },

{ question: 'Any hurt which endangers life or which causes the sufferer to be in severe body pain or unable to follow his ordinary pursuits for a period of 20 days after the accident (Grievous injuries)', answer: '20 days', timing: '20 days' },

    { question: 'If the distance (km) data is missing and not retrievable for a CC Rake, for how many days is the BPC valid?', answer: '20 days', timing: '20 days' },

    { question: 'Minimum number of days from the date of accident ‘D’, submission of enquiry report to CRS/Rly Board to be done within is _____', answer: 'D + 20 days', timing: '20 days' },

    { question: 'Any hurt which endangers life or which causes the sufferer to be in severe body pain or unable to follow his ordinary pursuits for a period of ______ days after the accident.', answer: '20 days', timing: '20 days' },

    { question: 'How many days of Leave on Half Average Pay (LHAP) in a calendar year, can be credited to an employee?', answer: '20 days', timing: '20 days' },

    { question: 'Within how many days the In-Principle Approval (IPA) will be granted to the applicant with the approval of the DRM in case of GCT on Non-Railway Land?', answer: '20 days', timing: '20 days' },

    { question: 'Any hurt which endangers life or which causes the sufferer to be in severe body pain or unable to follow his ordinary pursuits for a period of ______ days after the accident (Grievous injuries)', answer: '20 days', timing: '20 days' },

    { question: 'Within how many days the In-principle Approval (IPA) will be granted to the applicant with the approval of DRM in cases of GCT on Non Railways land?', answer: '20 days', timing: '20 days' },

    { question: 'The validity of material train BPC in case of UIC rakes subject to examination of the train by TXR once in fortnight is', answer: '30 days', timing: '30 days' },

    { question: 'Within which period should be the compensatory leave (Compencentary Rest) be sanctioned?', answer: '30 days', timing: '30 days' },

    { question: 'Within how many days CL can be changed?', answer: '30 days', timing: '30 days' },

    { question: 'Provided that no such request shall be considered unless received by such authority, or any other authority designated in this behalf, within a period of ______ days of the concerned Railway servant joining his duty on the expiry of the relevant spell of leave availed of by him.', answer: '30 days', timing: '30 days' },

    { question: 'For encashment of Leave Salary minimum leave balance should be __________ days', answer: '30 days', timing: '30 days' },

    { question: 'Minimum notice period for inviting open tenders costing up to Rs. 2 crores', answer: '30 days', timing: '30 days' },

    { question: 'What is the mandatory minimum time limit for booking an FTR Special Coach/Train before the date of journey?', answer: '1 month', timing: '1 month' },

    { question: 'First Aid boxes available with Station Masters and Guards of passenger carrying trains are to be inspected by DMO ____________', answer: 'Once in a month', timing: '1 month' },

    { question: 'Each Inspector of Way or Works shall at least ______inspect the permanent way gauges, flags, signal lamps, detonators, tools and implements supplied to the gangs and ascertain whether the above equipment is complete and in good order.', answer: 'Once in a month', timing: '1 month' },

    { question: 'How many days of Leave on Average Pay (LAP) can be granted to a Permanent/Temporary Railway servant for a period of one year?', answer: '30 days', timing: '30 days' },

    { question: 'A balance of atleast ________ days of leave on Average Pay should be available to the credit in leave account after taking into account the period of encashment', answer: '30 days', timing: '30 days' },

    { question: 'Maximum limit of Special Casual Leave (SCL) is ______ days in a year', answer: '30 days', timing: '30 days' },

    { question: 'Request for conversion of one kind of leave into another kind of leave shall be submitted within ______ days of joining duty.', answer: '30 days', timing: '30 days' },

    { question: 'How many days leave is given to Special Category Apprenticeships(SCRA)', answer: '30 days', timing: '30 days' },

    { question: 'The first appeal to the first appellate authority can be preferred by the applicant within ______ days from the expiry of the prescribed time limit or the receipt of the decision from the PIO', answer: '30 days', timing: '30 days' },

    { question: 'Full Tarif Rates (FTR) registration can be done prior to the journey date minimum of _______ days', answer: '30 days', timing: '30 days' },

    { question: 'How many days after leave without pay is a railway employee entitled for maintenance grant through SBF', answer: '30 days', timing: '30 days' },

    { question: 'The validity of CC rake BPC is ______ days', answer: '35 days', timing: '35 days'},

    { question: 'For miscarriage including abortion, what period of Maternity leave may be granted', answer: '45 days', timing: '45 days' },

    { question: 'Appeal shall be entertained unless preferred within ________ days', answer: '45 days', timing: '45 days' },

    { question: "A Group 'D' Railway servant, who has been dismissed, removed or compulsorily retired from service may, after his appeal to the appropriate appellate authority has been disposed of and within ______ days thereafter, apply to the Divisional Railway Manager and where he is not under the control of any Divisional Railway Manager to the senior-most Administrative Grade Officer under whose control he may be working, for a revision of the penalty imposed on him.", answer: '45 days', timing: '45 days' },

    { question: "A Group 'C' Railway servant who has been dismissed, removed or compulsorily retired from service may, after his appeal to the appropriate appellate authority has been disposed of, and within 45 days thereafter, apply to the General Manager for a revision of the penalty imposed on him.", answer: '45 days', timing: '45 days' },

    { question: "No appeal preferred under this part (Rule 20 - Period of limitation for appeals), shall be entertained unless such appeal is preferred within a period of ______ days from the date on which a copy of the order appealed against, is delivered to the appellant", answer: '45 days', timing: '45 days' },

    { question: 'Number of days for intial training for Probationary Guard as per latest module is', answer: '50 days', timing: '50 days' },

    { question: 'Construction officials responsible for carrying out the NI work should send a circular notice to the Sr. DOM/Sr. DSO at least ___________ in advance.', answer: '2 months', timing: '2 months' },

    { question: 'Maximum encashment of Leave on Average Pay (LAP) is ______ days', answer: '60 days', timing: '60 days' },

    { question: 'The time-limit for submitting of claims for Travelling Allowance is within ___ days succeeding the date of completion of journey', answer: '60 days', timing: '60 days' },

    { question: 'Advance can be taken how many days before issue?', answer: '60 days', timing: '60 days' },

    { question: 'In the case of permanent running staff the leave salary on leave on average pay for the first ______ days shall be at the substantive pay or on average pay, whichever is greater, and thereafter at substantive pay.', answer: '60 days', timing: '60 days' },

    { question: 'Performance Guarantee for works has to be submitted within', answer: '60 days', timing: '60 days' },

    
    { question: 'Engineering branch will arrange with the Operating branch for the issue of a circular notice, which shall be valid for', answer: '3 months', timing: '3 months' },

    { question: 'All Signals on a section shall be jointly inspected by the Signal, Transportation and Loco Inspectors (SI, TI & LI) at least once in 3 months.', answer: '3 months', timing: '3 months' },

    { question: 'Mock drills for Accident Relief Train (ART) and Medical Relief Train (MRT) shall be conducted once in________', answer: '3 months', timing: '3 months' },

    { question: 'The knowledge of staff that are required to use detonators shall be tested once in_______', answer: '3 months', timing: '3 months' },

    { question: 'How often should a Kavach-fitted loco be used for conducting a Signal Sighting Committee inspection IR-ATP (Kavach) territory?', answer: 'once in a 3 months', timing: '3 months' },

    { question: 'What is the periodicity of the meetings of Official Language Implementation Committee?', answer: 'Once in 3 months', timing: '3 months' },

    { question: 'Review meetings of progress of Official Language at Zonal level is conducted in every', answer: 'Once in 3 months', timing: '3 months' },

    { question: 'What is the periodicity of the "Partification of Railway Employees in Management (PREM)" meeting at zonal level?', answer: 'Once in 3 months', timing: '3 months' },

    { question: 'GPF (General Provident Fund) subscription is stopped _______ months before retirement.', answer: '3 months', timing: '3 months' },

    { question: '50% Subsistence Allowance is allowed during suspension for the first ______ months.', answer: '3 months', timing: '3 months' },

    { question: 'Minimum number of days from the date of accident ‘D’, DAR action to be completed within is _____', answer: 'D + 90 days', timing: '90 days' },

    { question: 'The review of an order of suspension shall be done by the authority which is competent to modify or revoke the suspension, on the recommendation of the review committee constituted for the purpose, and such competent authority shall pass orders either extending or revoking the suspension before expiry of ninety days from the date of order of suspension.', answer: '90 days', timing: '90 days' },

    { question: 'Leave up to a period of ______ days may be granted to an aggrieved female Railway Servant on the recommendation of the Internal committee or the Local Committee, as the case may be, during the pendency of inquiry under Sexual Harassment of women at workplace (Prevention, Prohibition and Redressal) Act, 2013', answer: '90 days', timing: '90 days' },

    
    { question: 'Under Railway Servants (Discipline & Appeal) Rules, 1968, Suspension order must be reviewed by the competent authority every-', answer: '90 days', timing: '90 days' },

    { question: 'Performance Guarantee for service contracts can be submitted within', answer: '90 days', timing: '90 days' },

    { question: 'Number of days for intial training for Probationary Station Master as per latest module is', answer: '90 days', timing: '90 days'},

    { question: 'Suspension or deemed suspension is valid only for a period of ______ days, if required may be extended by review committee.', answer: '90 days', timing: '90 days' },

    { question: 'Appeal against classification of railway servants under HOER can be within ______ days of its publication?', answer: '90 days', timing: '90 days' },

    { question: 'What is the maximum award admissible under Accident Free Service for Loco Pilots/Motorsmen?', answer: '90 days', timing: '90 days' },

    { question: 'Periodical meeting of Rajabhasha Co - ordination committee is conducted in every ____ months.', answer: '3 months', timing: '3 months' },


    { question: 'The validity for a Privilege Pass/PTO is?', answer: '4 months', timing: '4 months' },

    { question: 'Privilege passes are valid for a period of ______ months from the date of issue.', answer: '4 months', timing: '4 months' },

    { question: 'Retention of Railway quarters for 4 months on normal rent. (Applicable to Government Pension Scheme)', answer: '4 months', timing: '4 months' },

    
    { question: 'Maternity leave for a female Railway servant shall be granted for a period of ______ days', answer: '180 days', timing: '180 days' },
    
    
    { question: 'The 2/4 wire telephone will be tested by SE/JE-Tele. once in', answer: '6 months', timing: '6 months' },
    { question: 'Contents of the EL Box shall be tested by the SE / JE-TL. once in', answer: '6 months', timing: '6 months' },
    { question: 'All Gds, LPs, ALP, Motor men who are required to work in automatic block system shall undergo one day intensive training and a certificate shall be renewed once in', answer: '6 months', timing: '6 months' },
    
    { question: 'Loco Pilot shall be re-examined after a refresher course and his certificate endorsed if he has not driven an electric engine or multiple units for more than', answer: '6 months', timing: '6 months' },
    
    { question: 'Record foils of the caution orders shall be preserved for a period of', answer: '6 months', timing: '6 months' },
    
    { question: 'Crew requirement is reviewed once in _______ months by the division based on the crew required for working coaching links and average working hours of goods crew.', answer: '6 months', timing: '6 months' },
    
    { question: 'Medical Relief Van and Auxiliary Van shall be inspected at least once in _______ months jointly by Divisional Officers of Medical, Safety, Civil Engineering, Mechanical, Electrical and S&T.', answer: '6 months', timing: '6 months' },
    
    { question: 'From the date of confinement, Paternity leave to be availed within.', answer: '6 months', timing: '6 months' },
    
    { question: 'What is the periodicity meeting of Town Officials Language Implementation Committee?', answer: 'Once in 6 months', timing: '6 months' },
    
    
    { question: 'The periodic joint inspection of tipplers to be carried out by Sr.DME/ DME (C&W) once in ______ months.', answer: '6 months', timing: '6 months' },
    
    { question: 'Regular inspection in which each station on the division is inspected in details at least ___________covering the various aspects of safety, operations and allied matters including staff matters and comprehensive in nature', answer: 'once in every 6 months', timing: '6 months' },
    
    { question: 'Running staff review should be carried out after every _______ months by Senior technical assistant of the division.', answer: '6 months', timing: '6 months' },
    
    { question: 'If a weighbridge becomes non-functional, how many days of loading permission can be granted by the General Manager?', answer: 'Up to 6 months', timing: '6 months' },

    { question: 'Full Tarif Rates (FTR) registration can be done in advance of maxmimum _______ months', answer: '6 months', timing: '6 months' },

    { question: 'Claims for Reimbursement of medical charges should be preferred within ______ months from the date of completion of treatment?', answer: '6 months', timing: '6 months' },
    
    { question: 'Subsequent reviews shall be made before expiry of the extended period of suspension. Extension of suspension shall not be for a period exceeding one hundred and eighty days at a time.', answer: '180 days', timing: '180 days' },
    
    { question: 'Maximum period of Leave on Average Pay (LAP) at a time that a Railway servant may be granted is ______ days', answer: '180 days', timing: '180 days' },
    
    { question: 'Maximum days of Leave on Average Pay (LAP) that can be accumulated to an employee in his service life (upto retirement) is ______ days', answer: '300 days', timing: '300 days' },

    { question: 'What is the miximum limit of unearned/leave not due in entire service life?', answer: '360 days', timing: '360 days' },
    
    { question: 'Fire-Extinguishers: Replacement shall be done once in', answer: '12 months', timing: '12 months' },

    { question: 'Testing of detonators shall be done once in 12 months.', answer: '12 months', timing: '12 months' },

    { question: 'The claim for compensation shall be made within the following time from the date of accident', answer: '12 months', timing: '12 months' },

    { question: 'On passing Hindi typing examination, for how many months personal pay equal in amount to one increment is given?', answer: '12 months', timing: '12 months' },

    { question: 'Wagon census is conducted once in ______', answer: 'a year', timing: '1 year' },

    { question: 'Normal period for which Station Operating Registers- Train passing registers/Books are required to be preserved', answer: '1 year', timing: '1 year' },

    { question: 'Normal period for which Station Operating Registers - Caution order register and Caution Order books are required to be preserved', answer: '1 year', timing: '1 year' },

    { question: 'The periodicity of full scale disaster management exercise to be conducted in a division is once in _______', answer: '1 year', timing: '1 year' },

    { question: 'Own request transfers, if NOC issued shall have a validity of ______ for relase of the staff', answer: '12 months', timing: '12 months' },

    { question: 'On passing Hindi Stenography examination, for how many months personal pay equal in amount to one increment is given?', answer: '24 months', timing: '24 months' },

    { question: 'Maximum Special Disability Leave (SDL) eligible under Fundamental Rule 83', answer: '24 months', timing: '24 months' },

    { question: 'Total how many days are granted as Child Care Leave in entire service?', answer: '730 days', timing: '730 days' },

    { question: 'What is the medical examination interval between 45 and 55 years of age?', answer: 'once in 2 years', timing: '2 years' },

    { question: 'Revenue sharing for Brown field Private Freight Terminal (PFT) starts after ______ years after notification of PFT.', answer: '2 years', timing: '2 years' },

    { question: 'Retention of Railway quarters up to ______ years on normal rent in the event of death while in service. (Applicable to Government Pension Scheme)', answer: '2 years', timing: '2 years'},

    { question: 'Special Allowance for Child Care for Women with Disabilities is payable upto which age of the child?', answer: '2 years', timing: '2 years' },
    
    { question: 'Periodical census of traffic at all level crossings shall be carried out for every', answer: '3 years for 7 days', timing: '3 years' },

    { question: 'No person shall operate the electrical block instruments unless he holds a competency certificate issued by Principal/ZRTI which shall be valid for a period of______', answer: '3 years', timing: '3 years' },

    { question: 'The competency certificate issued by DEE (TRD) to SM for operating the isolators (in emergency) is valid for ______ years', answer: '3 years', timing: '3 years' },

    { question: 'Record pertaining to Court Cases, departmental enquiries should not be destroyed till ______ years from the date the case is decided.', answer: '3 years', timing: '3 years' },

    { question: 'Normal period for which Station Operating Registers- Wagon demand/priority register are required to be preserved is ______', answer: '3 years', timing: '3 years' },

    { question: 'Normal period for which Station Operating Registers - Indent and Loading Register are required to be preserved is ______', answer: '3 years', timing: '3 years' },

    { question: 'Normal period for which Station Operating Registers - Control Order Book/Conference Book are required to be preserved is ______', answer: '3 years', timing: '3 years' },

    { question: 'Record pertaining to Court Cases, departmental enquiries should not be destroyed till _______ years from the date the case is decided.', answer: '3 years', timing: '3 years' },

    { question: 'What is the tenure of the Internal Complaints Committee under Sexual Harassment of Women at the Workplace?', answer: '3 years', timing: '3 years' },

    { question: 'Each concessionaire is required to set up two rail linked inland container terminals within ______ years of obtaining the license to operate or have access to inland container terminals.', answer: '3 years', timing: '3 years'},

    { question: 'After how many years can a railway employee apply for reimbursement of spectacles?', answer: '3 years', timing: '3 years' },

    { question: 'Maximum service required for withdrawal from National Pension System (NPS) is ______ years', answer: '3 years', timing: '3 years' },

    { question: 'Railway Servants with not less than _________ years of service shall be eligible for assistance for the education of their children?', answer: '3 years', timing: '3 years' },


    { question: 'How many months of study leave can be accepted for doing PHD in medical category?', answer: '36 months', timing: '36 months' },

    { question: 'The certificate of competency for Electronic Signal Maintainer (ESM) is valid for', answer: '4 years', timing: '4 years' },

    { question: 'All India Leave Travel Concession (AILTC) is applicable for how many years block?', answer: '4 years', timing: '4 years' },
    { question: 'Up to 45 years of age, medical examination is done once in how many years?', answer: '4 years', timing: '4 years' },
    
    { question: 'Certificate of competency issued to Gateman will be valid for a period of', answer: '5 years', timing: '5 years' },

    { question: 'Station Working Rules (SWR) should be issued afresh once in', answer: '5 years', timing: '5 years' },

    { question: 'Minimum requisite service to be completed before grant of any study leave for scientific/technical purpose?', answer: '5 years', timing: '5 years' },

    { question: 'No Railway servant shall be granted leave of any kind for a continuous period exceeding ______ years.', answer: '5 years', timing: '5 years' },

    { question: 'Revenue sharing for Green field Private Freight Terminal (PFT) starts after ______ years after notification of PFT', answer: '5 years', timing: '5 years' },

    { question: 'Minimum gap between two partial withdrawals in National Pension System (NPS) is ______ years:', answer: '5 years', timing: '5 years' },

    { question: 'Maximum qualifying service for Unified Pension Scheme (UPS) is ______ years', answer: '10 years', timing: '10 years' },

    { question: 'In Unified Pension Scheme (UPS), Maximum assured pension is available to employees with _______ years of service', answer: '10 years of service', timing: '10 years' },

    { question: 'Minimum qualifying service for pension under Old Pension Scheme (OPS) is _______ years of service', answer: '10 years of service', timing: '10 years' },

    { question: 'In no case, whatever, shall a male passenger except a boy under _________ of age be allowed to travel in a compartment reserved for Ladies in any train.', answer: '12 years', timing: '12 years' },

    { question: 'In Old Pension Scheme (OPS), After how many years is commuted pension restored?', answer: '15 years', timing: '15 years' },  

    { question: 'Post Retirement Complimentary Pass are admissible to Railway Servant retired after putting in ______ years of service', answer: '20 years', timing: '20 years' },

    { question: 'The minimum qualifying service for Voluntary Retirement is _______ years', answer: '20 years', timing: '20 years' },

    { question: 'In Unified Pension Scheme (UPS), minimum service for VRS (Voluntary Retirement Scheme) is', answer: '20 years', timing: '20 years' },

    { question: 'In Unified Pension Scheme (UPS), Service required for full assured pension is _______ years', answer: '25 years', timing: '25 years' },

    { question: 'Project life should be considered as ______ years from the date of Commissioning as per Para 345 of Indian Railways Engineering Code', answer: '30 years', timing: '30 years' },

    { question: 'Agreement period for Private Freight Terminal (PFT) is ______ years', answer: '30 years', timing: '30 years' },

    { question: 'What is the maximum tenure for which Railway land can be leased to the GCTO under the GCT Agreement', answer: '35 years', timing: '35 years' },

    { question: 'Normal retirement age for National Pension System (NPS) is ______ years', answer: '60 years', timing: '60 years' },

    { question: 'In Old Pension Scheme (OPS), Additional pension starts at the age of ______ years', answer: '80 years', timing: '80 years' },
    
    { question: 'After issue of following number of amendment slips SWR should be issued afresh', answer: '5', timing: 'Other' },
    { question: 'Normal monsoon period for SC, HYB & NED divisions is from 15th June to', answer: '15 October', timing: 'Other' },
    { question: 'Normal monsoon period for Guntakal division is from 15th June to', answer: '31st January', timing: 'Other' },
    { question: 'Normal monsoon period for Vijayawada & Guntur divisions is from 15th June to', answer: '15th January', timing: 'Other' },
    { question: 'For all Goods trains at originating station "is line clear" should be asked', answer: 'Train is ready', timing: 'Other' },
    { question: 'At intermediate stations, for all stopping trains with a halt of less than five minutes is line clear\' shall be asked when the Train is', answer: 'Sighted', timing: 'Other' },
    { question: 'Normal period for which Station Operating Registers- Muster Roll are required to be preserved is ______', answer: 'Permanent record', timing: 'Others' },
    { question: 'Normal period for which Station Operating Registers- Station Inspection Register are required to be preserved is ______', answer: 'Permanent record', timing: 'Others' },
    { question: 'Normal period for which Station Operating Registers Transportation Bio-data Register Register of Home Addresses of staff etc are required to be preserved is ______', answer: 'Permanent record', timing: 'Others' },
  ]

  // Group timings by duration for better organization
  const groupedByTiming = timings.reduce((acc, timing) => {
    const timingKey = timing.timing || 'Other'
    if (!acc[timingKey]) {
      acc[timingKey] = []
    }
    acc[timingKey].push(timing)
    return acc
  }, {} as Record<string, Timing[]>)

  const getTimingColor = (timing: string) => {
    if (timing === 'Other') {
      return 'bg-linear-to-r from-purple-600 to-purple-700'
    }
    if (timing.includes('sec') || timing.includes('minute') && timing.includes('1')) {
      return 'bg-linear-to-r from-red-600 to-red-700'
    }
    if (timing.includes('minute') && (timing.includes('2') || timing.includes('5') || timing.includes('7'))) {
      return 'bg-linear-to-r from-orange-600 to-orange-700'
    }
    if (timing.includes('minute') && (timing.includes('10') || timing.includes('15'))) {
      return 'bg-linear-to-r from-yellow-600 to-yellow-700'
    }
    if (timing.includes('minute') && (timing.includes('25') || timing.includes('30') || timing.includes('60'))) {
      return 'bg-linear-to-r from-green-600 to-green-700'
    }
    if (timing.includes('hour') || timing.includes('day') || timing.includes('Fortnight')) {
      return 'bg-linear-to-r from-blue-600 to-blue-700'
    }
    if (timing.includes('month') || timing.includes('year')) {
      return 'bg-linear-to-r from-indigo-600 to-indigo-700'
    }
    return 'bg-linear-to-r from-purple-600 to-purple-700'
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Timings
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to timings for AOM aspirants
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {Object.entries(groupedByTiming).map(([timing, items]) => (
            <div key={timing} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Timing Header */}
              <div className={`${getTimingColor(timing)} text-white px-2 text-center py-4`}>
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-center">
                  {timing}
                </h2>
              </div>

              {/* Items */}
              <div className="p-3 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Question */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.question}
                          </p>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="shrink-0 sm:w-48 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-700">
                          <span className="text-blue-300 font-semibold text-lg">
                            {item.answer}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {timings.length}
            </div>
            <div className="text-gray-300">Total Timings</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {Object.keys(groupedByTiming).length}
            </div>
            <div className="text-gray-300">Timing Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              Sec-Years
            </div>
            <div className="text-gray-300">Time Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimingsWisePage  
