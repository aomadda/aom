export const kavachQuizzes = {
    "kavach":[
        {
            question: "1. What is the former name of the KAVACH system? ",
              options: [
                "Automatic Train Protection (ATP) ",
                "Train Collision Avoidance System (TCAS) ",
                "Anti-Collision Device (ACD) ",
                "European Train Control System (ETCS) ",
              ],
              correctAnswer: 1,
              explanation: "KAVACH was formerly known as the Cab-signalling Train Collision Avoidance System (TCAS) "
          },
          {
            question: `The KAVACH system is being provided on sections equipped with which type of
        signalling?`,
              options: [
                "Two-Aspect Semaphore Signalling",
                "Multi Aspect Colour Light Signalling", 
                "Modified Lower Quadrant Signalling",
                "Route Relay Interlocking only"
              ],
              correctAnswer: 1,
              explanation: `KAVACH is being provided on sections equipped with Multi Aspect Colour Light
        Signalling controlled by relay or electronic interlocking`
          },
          {
            question: `What is the primary role of KAVACH in relation to the Loco Pilot?`,
              options: [
                `To replace the Loco Pilot in automatic sections`,
                `To be an additional aid to the Loco Pilot`,
                `To record the Loco Pilot's actions for review`,
                `To control the train independently of the Loco Pilot`
              ],
              correctAnswer: 1,
              explanation: `KAVACH is only an additional safety aid to the Loco Pilot and the Loco Pilot
        shall continue to follow prevalent operating and safety rules`
          },
          {
            question: `What are the two main sub-systems or components of the KAVACH system?`,
              options: [
                "Station Equipment and Control Room Equipment",
                "On-Board Equipment and Track Side Equipment",
                "Loco Equipment and Wagon Equipment",
                "Signal Equipment and Communication Equipment"
              ],
              correctAnswer: 1,
              explanation: `The KAVACH System comprises two main categories: Track side equipment and
        On-board equipment (Loco Kavach)`
          },
          {
            question: `What is the function of Radio Frequency Identification (RFID) tags in the KAVACH system?`,
              options: [
                `To communicate directly with the satellite`,
                "To provide power to the trackside units",
                `To transfer track information and location data to the on-board computer`,
                "To physically stop the train in an emergency"
              ],
              correctAnswer: 2,
              explanation: `RFID tags are fastened to track sleepers and they transfer track information
        and location data to the on-board KAVACH computer`
          },
          {
            question: `Where is the Stationary Kavach Unit typically located?`,
              options: [
                "In the Station Master's office",
                "At the base of the communication tower",
                "In the Relay Room or Electronic Interlocking Room",
                "Inside the locomotive cab"
              ],
              correctAnswer: 2,
              explanation:`The Stationary Kavach Unit is located in the Relay Room/Electronic Interlocking
        Room`
          },
          {
            question: `7. What is the Driver Machine Interface (DMI) in the context of KAVACH?`,
              options: [
                `The physical brake handle used by the Loco Pilot`,
                `The radio used for communication with the Station Master`,
                `A display panel in the locomotive cab providing real-time information`,
                "The main computer of the locomotive"
              ],
              correctAnswer: 2,
              explanation: `The Driver Machine Interface (DMI) is a display panel in the locomotive cab that
        provides real-time information about track conditions, movement authority, and signal
        aspects`
          },
          {
            question: `What is the function of the Brake Interface Unit (BIU)?`,
              options: [
                `It allows the Guard to apply brakes from the brake van`,
                `It executes the brake commands from the Onboard Vital Computer automatically`,
                `It indicates the health of the train's braking system`,
                `It is an interface for manual brake application by the Loco Pilot`,
              ],
              correctAnswer: 1,
              explanation: `The Brake Interface Unit (BIU) executes the brake commanded by the Onboard
        Vital Computer automatically when the Loco Pilot is not controlling the speed as required`
          },
          {
            question: `For what purpose is the Key Management System (KMS) used in KAVACH?`,
              options: [
                `To manage the physical keys of the locomotive`,
                `To ensure secure exchange of Movement Authorities between Stationary and Onboard
        systems`,
                `To manage the keys for the relay room`,
                `To provide the Station Master with a security key for the SM-OCIP`,
              ],
              correctAnswer: 1,
              explanation: `The Key Management System (KMS) ensures a secure exchange of Movement
        Authorities between Stationary Kavach and Onboard Kavach systems`
          },
          {
            question: `What is "Movement Authority" (MA) in the KAVACH system?`,  
              options: [
                `The maximum speed a train is allowed to travel at`,
                `The distance up to which the train is permitted to travel safely`,
                `The permission given by the Station Master to start the train`,
                `The authority to pass a signal at 'ON'`,
              ],
              correctAnswer: 1,
              explanation: `Movement Authority (MA) is defined as the distance up to which the train is
        permitted to travel safely`
          },
          {
            question: `Where are the operating instructions for the Station Master Operation Cum Indication
        Panel (SM-OCIP) to be incorporated?`, 
        options: [
                `In the General & Subsidiary Rules (G&SR)`,
                `In the Accident Manual`,  
                `In Appendix-C of the Station Working Rules (SWR)`,
                `In the Loco Pilot's handbook`,
              ],
              correctAnswer: 2,
              explanation: `The system of working and operations for the SM-OCIP shall be incorporated in
        Appendix-C of Station Working Rules (SWR) of the stations equipped with Kavach`
          },
          {
            question: `How can a Station Master perform any operation on the SM-OCIP?`,
              options: [
                `By pressing any button on the panel`,
                `Only when the SM's key is inserted and turned to the 'IN' position`,
                `After receiving a private number from the Controller`,
                `After the panel shows 'HEALTH OK'`,
              ],
              correctAnswer: 1,
              explanation: `All operations on the SM-OCIP can be performed only when the SM's key is
        inserted and turned to the 'IN' position`
          },
          {
            question: `What is the indication on the SM-OCIP when the Stationary Kavach is unhealthy?`,
              options: [
                `A solid GREEN 'HEALTH OK' LED`,
                `A blinking RED 'SOS' LED`,
                `A solid RED 'HEALTH FAIL' LED`,
                `A blinking YELLOW 'TSR-ACK' LED`,
              ],
              correctAnswer: 2,
              explanation: `A solid RED 'HEALTH FAIL' LED indicates that the Station Kavach is Unhealthy`
          },
          {
             question: `How does a Station Master manually generate an SOS message?`,
              options: [
                `By pressing the RED 'SOS' button alone`,
                `By pressing the 'SOS' and 'Common' buttons simultaneously`,
                `By pressing the 'SOS' and 'Cancel' buttons simultaneously`,
                `By turning the SM Key to 'OFF' position`,
              ],
              correctAnswer: 1,
              explanation: `The Station Master shall press the 'SOS' and 'Common' buttons simultaneously
        to generate the SOS`
          },
          {
            question: `When a manual SOS is generated from a station, within what radius will brakes be applied
              automatically to functional KAVACH locos?`, 
              options: [
                `1000m`,
                `2000m`,
                `3000m`,
                `5000m`,
              ],
              correctAnswer: 2,
              explanation: `The generated SOS will cause brakes to be applied automatically to
        Onboard/Loco Kavach within a radius of 3000m from the SOS generating Station Kavach15`
          },
          {
            question: `After an SOS has brought a train to a stop, what must the Loco Pilot do to release the
        brakes?`, 
              options: [
                `Wait for the SOS to be cancelled`,
                `Acknowledge the SOS`,
                `Reverse the train by 10 metres`,
                `Contact the Station Master for permission`,
              ],
              correctAnswer: 1,
              explanation: `After the train is brought to a STOP DEAD (STANDSTILL), the Loco Pilot shall
        acknowledge the SOS, for releasing the brakes`
          },
          {
            question: `How does a Station Master cancel an SOS message that was previously generated?`,
              options: [
                `By pressing the 'Cancel' button alone`,
                `By turning the SM Key to the 'OFF' position`,
                `By pressing the 'Cancel' and 'Common' buttons simultaneously`,
                `The SOS cancels automatically after 3 minutes`,
              ],
              correctAnswer: 2,
              explanation: `The SM shall cancel the SOS message by pressing the 'Cancel' and 'Common'
        buttons simultaneously`
          },
          {
            question: `In which operational mode does the Onboard KAVACH unit start when the loco is first
        energized?`,
              options: [
                `Staff Responsible Mode (SR)`,
                `Full Supervision Mode (FS)`,
                `Standby Mode (SB)`,
                `On Sight Mode (OS)`,
              ],
              correctAnswer: 2,
              explanation: `When the loco is energized and the Kavach unit is switched on, it comes into
        Standby (SB) mode, which is the default mode`
          },
          {
            question: `In Standby (SB) mode, what movement is supervised by KAVACH?`,
              options: [
                `A maximum speed of 10 km/h`,
                `Standstill (STOP DEAD) only`,
                `The maximum permissible speed of the loco`,
                `Reverse movement only`,
              ],
              correctAnswer: 1,
              explanation: `In Standby (SB) mode, the train is supervised for STOP DEAD (STANDSTILL) only.
        If any movement is detected, it applies Emergency Brake`
          },
          {
            question: `Which mode must be selected by the Loco Pilot to start the train from a standstill?`,
              options: [  
                `Full Supervision Mode (FS)`,
                `Staff Responsible Mode (SR)`,
                `On Sight Mode (OS)`,
                `Trip Mode (TR)`,
              ],
              correctAnswer: 1,
              explanation: `The Staff Responsible Mode (SR) needs to be selected by the LP in order to
        start the train`
          },
          {
            question: `In Staff Responsible (SR) mode, KAVACH only supervises what speed?`,
              options: [
                `A ceiling speed (Maximum Permissible Speed of the Loco)`,
                `A fixed speed of 30 km/h`,
                `The speed dictated by the signal aspect`,
                `The speed restrictions of turnouts`,
              ],
              correctAnswer: 0,
              explanation: `In Staff Responsible (SR) mode, Kavach will only supervise a ceiling speed (MPS
        of Loco)`
          },
          {
            question: `How does the Onboard KAVACH automatically transition from Staff Responsible (SR)  
        mode to On Sight (OS) mode?`, options: [
                `After passing one Stop signal in the 'OFF' position`,
                `After receiving an SOS message`,
                `After passing two RFID tags and establishing communication from Stationary Kavach`,
                `After the Loco Pilot presses the 'OS' button`,
              ],
              correctAnswer: 2,
              explanation: `After passing two RFID tags (for getting direction) and communication from
        stationary Kavach, the on board Kavach will automatically enter into 'On sight' mode from 'SR'
        mode`
          },
          {
            question: `The Onboard KAVACH enters Full Supervision (FS) mode automatically only after the train
        has:`, options: [
                `Reached its maximum booked speed`,
                `Crossed at least one stop signal in the OFF condition after entering On Sight mode`,
                `Received a specific command from the Station Master`,
                `Travelled for at least 3 kilometres in KAVACH territory`,
              ],
              correctAnswer: 1,
              explanation: `A necessary condition for entering Full Supervision mode is that after coming to
        On Sight mode, the train has crossed at least one stop signal in OFF condition`
          },
          {
            question: `Into which mode does KAVACH automatically transition from Full Supervision (FS) mode if
        radio communication is lost for 30 seconds in an Absolute Block Section?`, 
        options: [
                `Staff Responsible Mode (SR)`,
                `On Sight Mode (OS)`,
                `Limited Supervision Mode (LS)`,
                `Trip Mode (TR)`,
              ],
              correctAnswer: 2,
              explanation: `KAVACH will automatically enter Limited Supervision (LS) mode from FS mode
        when radio packets are not available/received for 30 seconds (configurable) for an Absolute
        Block System`
          },
          {
            question: `What action will cause the Onboard KAVACH to enter Trip (TR) mode?`, options: [
                `Exceeding the sectional speed by 10%`,
                `Passing a stop signal at 'ON' when in FS/OS mode`,
                `Loss of communication with the station`,
                `The Loco Pilot applying emergency brakes`,
              ],
              correctAnswer: 1,
              explanation: `When Loco Kavach is in FS/OS mode and the train passes a stop signal at 'ON'
        or end of authority, Kavach will automatically enter into trip mode`
          },
          {
            question: `How does a Loco Pilot come out of Trip (TR) mode?`, 
              options: [
                `It resets automatically after 60 seconds`,
                `The Station Master must cancel it from the SM-OCIP`,
                `The LP shall manually select Post Trip (PT) Mode when the train is at a standstill`,
                `By reversing the train slightly`,
              ],
              correctAnswer: 2,
              explanation: `The Loco Pilot shall manually select Post Trip Mode (PT) in order to come out of
        Trip Mode, which can only be done when the train is at STOP DEAD (STANDSTILL)`
          },
          {
            question: `What is the default supervised speed in Reverse (RV) mode?`, 
              options: [
                `15 kmph`,
                `25 kmph`,
                `30 kmph`,
                `40 kmph`,
              ],
              correctAnswer: 1,
              explanation: `In Reverse (RV) mode, the Loco Kavach unit shall supervise train movements
        against a ceiling speed (Default 25 kmph)`
          },
          {
            question: `Which mode is defined to manage the loco KAVACH unit of a slave engine in a multipleunit
        consist?`, options: [
                `Shunt Mode (SH)`,
                `Non-Leading Mode (NL)`,
                `Isolation Mode (IS)`,
                `Staff Responsible Mode (SR)`,
              ],
              correctAnswer: 1,
              explanation: `The Non-leading mode (NL) is defined to manage the loco Kavach unit of a
        slave engine that is either electrically coupled or not to the leading engine`
          },
          {
            question: `What is the default supervised speed in Shunt (SH) mode?`, options: [
                `10 kmph`,
                `15 kmph`,
                `25 kmph`,
                `No speed supervision`,
              ],
              correctAnswer: 1,
              explanation: `KAVACH supervises Shunt mode speed, which is by default 15 kmph, within the
        station section`
          },
          {
            question: `In which situation should KAVACH be isolated by the Loco Pilot?`, options: [
                `During normal run in an automatic signalling section`,
                `When entering a loop line for a scheduled stop`,
                `For shunting beyond the station section`,
                `When the train is running perfectly on time`,
              ],
              correctAnswer: 2,
              explanation: `KAVACH should be isolated for dispatching a train into the wrong line in a
        double line section, for shunting beyond the station section, and during Non-Interlocked (NI)
        working`
          },
          {
            question: `Does the absence or damage of RFID tags cause conventional line-side signal failures?`, options: [
                `Yes, it causes the signal to show a red aspect`,
                `Yes, it causes the signal to go blank`,
                `No, it does not cause signal failures`,
                `Only if two consecutive tags are damaged`,
              ],
              correctAnswer: 2,
              explanation: `RFID tags do not control conventional Line side Railway Signals. Hence, absence
        or damage or deterioration of RFID tags does not cause Signal failures`
          },
          {
            question: `If a Station Master wrongly generates an SOS, how is normalcy restored?`,
              options: [
                `It restores automatically after 5 minutes`,
                `The Loco Pilot must acknowledge and cancel it`,
                `The SM has to cancel it by pressing CANCEL and COMMON buttons together`,
                `The system has to be restarted by the S&T staff`,
              ],
              correctAnswer: 2,
              explanation: `The SM has to cancel the wrongly generated SOS by pressing the CANCEL and
        COMMON buttons on the SM-OCIP together with the SM's Key in the "IN" position`
          },
          {
            question: `Protection against Signal Passing At Danger (SPAD) is an example of which category of
        KAVACH protection?`, options: [
                `Category (I): Protection against inadequate braking by Loco Pilot in his own Loco`,
                `Category (II): Protection against unusuals caused by external factors`,
                `Category (III): Protection against communication failure`,
                `Not a protected feature`,
              ],
              correctAnswer: 0,
              explanation:`Protection against Collisions due to SPAD is a Category (I) protection, for which
        functional Onboard Kavach in the defaulting loco is adequate and the protection is
        guaranteed`
          },
          {
            question: `Is the protection level against hitting another derailed train guaranteed by KAVACH?`, options: [
                `Yes, it is always guaranteed`,
                `Yes, but only if both trains have KAVACH`,
                `No, such protections and their level of protection are not guaranteed`,
                `Yes, but only in automatic signalling sections`,
              ],
              correctAnswer: 2,
              explanation: `Protection against hitting another derailed train is a Category (II) protection,
        and such protections and their level of protection are not guaranteed`
          },
          {
            question: `How often do the Station Kavach and Loco Kavach units communicate with each other?`,
              options: [
                `Every second`,
                `Every 2 seconds`,
                `Every 5 seconds`,
                `Every 10 seconds`,
              ],
              correctAnswer: 1,
              explanation: `Station Kavach and Loco Kavach units communicate with each other for every 2
        seconds`
          },
          {
            question: `The Dynamic Speed Profile used by KAVACH depends on the braking characteristics of
        the train and what other factor?`, options: [
                `The number of coaches`,
                `The train length`,
                `The type of locomotive (Diesel/Electric)`,
                `The time of day (Day/Night)`,
              ],
              correctAnswer: 1,
              explanation: `The Dynamic Speed Profile curve depends on the braking characteristics of the
        train and train length`
          },
          {
            question: `What is the timeout period for radio communication failure in an Automatic Block Section
        before KAVACH takes action?`, options: [
                `5 seconds`,
                `10 seconds`,
                `20 seconds`,
                `30 seconds`,
              ],
              correctAnswer: 1,
              explanation: `Timeout due to radio communication failure is deemed to occur when 10
        seconds (configurable) have passed for an Automatic Block Section since the last packet was
        received`
          },
          {
            question: `How are RFID tags fixed to PSC Sleepers?`, options: [
                `By drilling holes and using bolts`,
                `By using a strong adhesive`,
                `Through clamps only`,
                `By welding them to the track`,
              ],
              correctAnswer: 2,
              explanation: `No holes shall be drilled in the Sleepers and the arrangement of fixing must be
        through clamps only`
          },
          {
            question: `KAVACH RFID tags are designed to be reliable for train speeds up to what limit?`,
              options: [
                `130 kmph`,
                `160 kmph`,
                `200 kmph`,
                `250 kmph`,
              ],
              correctAnswer: 2,
              explanation: `These RFID tags are suitable for reliable working for train speeds up to 200
        kmph`
          },
          {
            question: `What happens if an RFID tag is submerged in water up to the rail level?`, options: [
                `It stops working immediately`,
                `It sends an error message to the SM-OCIP`,
                `It is able to work normally`,
                `Its range is reduced by half`,
              ],
              correctAnswer: 2,
              explanation: `These RFID tags are able to work even when submerged in water up to rail
        level`
          },
          {
            question: `What is the "End of Authority" (EoA)?`, options: [
                `The point where the Loco Pilot's duty ends`,
                `The location up to which the train is permitted to proceed and where the target speed is
        zero`,
                `The end of the KAVACH-equipped section`,
                `The last signal of the station`,
              ],
              correctAnswer: 1,
              explanation: `The End of Authority (EoA) is the location up to which the train is permitted to
        proceed and where the target speed is zero`
          },
          {
            question: `What is displayed on the first line of the SM-OCIP LCD screen?`, options: [
                `Current date and time`,
                `The name of the Station Master on duty`,
                `Station ID, KMS Key Index, and TSR Count`,
                `The last SOS message received`,
              ],
              correctAnswer: 2,
              explanation: `Line-1 of the LCD panel displays: ID: (Station ID) KI: (KMS Key Index) T: (TSR
        Count)`
          },
          {
            question: `The audio buzzer on the SM-OCIP will sound when:`, options: [
                `The HEALTH FAIL LED is lit`,
                `An SOS is generated or received`,
                `The SM Key is turned to the 'IN' position`,
                `A train enters the station limits`,
              ],
              correctAnswer: 1,
              explanation: `The audio buzzer will sound along with the SOS LED Red blinking when a
        manual SOS is generated / received`
          },
          {
            question: `After an SOS brings a train to a stop, KAVACH supervises the train speed at 30 kmph until
        what point?`, options: [
                `For a distance of 1 kilometre`,
                `Until the train passes the originating location of the "SOS" message`,
                `Until the train reaches the next station`,
                `For a duration of 5 minutes`,
              ],
              correctAnswer: 1,
              explanation: `After acknowledging the SOS, the train speed shall be supervised by KAVACH
        for 30kmph (configurable) till the train passes the originating Location of the "SOS"
        message`
          },
          {
            question: `Which of these is a condition for the speed of an SOS-affected train to be restored to
        normal?`, options: [
                `The Loco Pilot presses the 'SR' button`,
                `The train waits for 10 minutes`,
                `The SOS message is cancelled by the source`,
                `The train communicates with a non-Kavach loco`,
              ],
              correctAnswer: 2,
              explanation: `The speed of such trains shall be restored only if one of the conditions is
        satisfied, one of which is: "SOS message is cancelled by the source`
          },
          {
            question: `The TSR / Ack button on the SM-OCIP is YELLOW. What is its current function?`, options: [
                `To generate Temporary Speed Restrictions (TSR)`,
                `To acknowledge display screens and the buzzer`,
                `To communicate with the Loco Pilot`,
                `It is not currently in use`,
              ],
              correctAnswer: 1,
              explanation: `The TSR / Ack button is used to acknowledge the display screen and buzzer. The
        TSR functionality is for future use`
          },
          {
            question: `Which of these is NOT a function of KAVACH in its normal operational modes?`, options: [
                `Continuous Speed Supervision`,
                `Displaying Signal Aspect in the cab`,
                `Auto whistling at Level Crossing gates`,
                `Automatic routing of trains`,
              ],
              correctAnswer: 3,
              explanation: `While KAVACH supervises the route set by interlocking, it does not perform
        automatic routing of trains itself. The other three are listed functions`
          },
          {
            question: `The On-board Kavach reverts to Staff Responsible (SR) mode from Full Supervision (FS) if:`, options: [
                `The train runs 10 minutes late`,
                `The Loco Pilot applies normal brakes`,
                `Three consecutive RFID tags are missed`,
                `The train passes a signal at 'Double Yellow'`,
              ],
              correctAnswer: 2,
              explanation: `Onboard Kavach will revert to Staff Responsible (SR) mode if, among other
        conditions, three consecutive tags are missed`
          },
          {
            question: `To come out of Post Trip (PT) mode and start the train, the Loco Pilot must press which
        button combination?`, options: [
                `P_Trip followed by CNFM`,
                `OVRD button followed by CNFM button`,
                `SR button followed by CNFM button`,
                `REV button followed by CNFM button`,
              ],
              correctAnswer: 1,
              explanation: `After obtaining necessary authorities post-trip, for the train to start, the LP is
        required to press the OVRD button followed by the CNFM button in order to enter OS mode
        from PT mode`
          },
          {
            question: `What is a key feature of the radio communication system in KAVACH?`, options: [
                `It works only in one direction (Station to Loco)`,
                `It uses a single radio channel for all communications`,
                `It has a dual arrangement with separate antennas, acting as a hot standby`,
                `It requires a line-of-sight of at least 10 km`,
              ],
              correctAnswer: 2,
              explanation: `The radio communication channels are in a dual arrangement which are used in
        alternate time cycles with a separate cable and antenna for each radio, which also acts as a
        hot standby`
          }
    ]
}