export type RuleOfTheDayItem = {
  id: number
  date: string
  chapter: string
  rule: string
  title: string
}

/** Format as DD-MM-YYYY to match ruleOfTheDay dates. */
export function formatRuleOfTheDayDate(date: Date = new Date()) {
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd}-${mm}-${yyyy}`
}

/** Today's rule from the calendar list (falls back to first entry). */
export function getTodayRuleOfTheDay(date: Date = new Date()): RuleOfTheDayItem {
  const key = formatRuleOfTheDayDate(date)
  return ruleOfTheDay.find((item) => item.date === key) ?? ruleOfTheDay[0]
}

/** One G&SR rule per day from 01-01-2026 to 31-12-2026.
 * Days 1–344: rules in GeneralRules order.
 * Days 345–365: continue again from 1.01 through year end.
 */
export const ruleOfTheDay: RuleOfTheDayItem[] = [
  {
    "id": 1,
    "date": "01-01-2026",
    "chapter": "Chapter I - PRELIMINARY",
    "rule": "1.01",
    "title": "Short title and commencement"
  },
  {
    "id": 2,
    "date": "02-01-2026",
    "chapter": "Chapter I - PRELIMINARY",
    "rule": "1.02",
    "title": "Definitions"
  },
  {
    "id": 3,
    "date": "03-01-2026",
    "chapter": "Chapter I - PRELIMINARY",
    "rule": "1.03",
    "title": "Classification of stations"
  },
  {
    "id": 4,
    "date": "04-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.01",
    "title": "Supply of copies of rules"
  },
  {
    "id": 5,
    "date": "05-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.02",
    "title": "Upkeep of the copy of rules"
  },
  {
    "id": 6,
    "date": "06-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.03",
    "title": "Knowledge of rules"
  },
  {
    "id": 7,
    "date": "07-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.04",
    "title": "Assistance in observance of rules"
  },
  {
    "id": 8,
    "date": "08-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.05",
    "title": "Prevention of trespass, damage or loss"
  },
  {
    "id": 9,
    "date": "09-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.06",
    "title": "Obedience to rules and orders"
  },
  {
    "id": 10,
    "date": "10-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.07",
    "title": "Attendance for duty"
  },
  {
    "id": 11,
    "date": "11-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.08",
    "title": "Absence from duty"
  },
  {
    "id": 12,
    "date": "12-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.09",
    "title": "Taking alcoholic drink, sedative, narcotic, stimulant drug or preparation"
  },
  {
    "id": 13,
    "date": "13-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.10",
    "title": "Conduct of railway servants"
  },
  {
    "id": 14,
    "date": "14-01-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.11",
    "title": "Duty for securing safety"
  },
  {
    "id": 15,
    "date": "15-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.01",
    "title": "General use of signals"
  },
  {
    "id": 16,
    "date": "16-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.02",
    "title": "Kinds of signals"
  },
  {
    "id": 17,
    "date": "17-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.03",
    "title": "Use of night signals by day"
  },
  {
    "id": 18,
    "date": "18-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.04",
    "title": "Placing of signals & signal arms and painting of signal arms"
  },
  {
    "id": 19,
    "date": "19-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.05",
    "title": "Use of fixed signals"
  },
  {
    "id": 20,
    "date": "20-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.06",
    "title": "Description of Warner signals and their indications"
  },
  {
    "id": 21,
    "date": "21-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.07",
    "title": "Description of Distant signals and their indications"
  },
  {
    "id": 22,
    "date": "22-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.08",
    "title": "Description of Stop signals and their indications"
  },
  {
    "id": 23,
    "date": "23-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.09",
    "title": "Kinds of fixed Stop signals for approaching trains"
  },
  {
    "id": 24,
    "date": "24-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.10",
    "title": "Kinds of fixed Stop signals for departing trains"
  },
  {
    "id": 25,
    "date": "25-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.11",
    "title": "Intermediate Block Stop signal"
  },
  {
    "id": 26,
    "date": "26-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.12",
    "title": "Kinds of fixed Stop signals in Automatic Block territories"
  },
  {
    "id": 27,
    "date": "27-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.13",
    "title": "Calling-on signals"
  },
  {
    "id": 28,
    "date": "28-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.14",
    "title": "Shunt signals"
  },
  {
    "id": 29,
    "date": "29-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.15",
    "title": "Co-acting signals"
  },
  {
    "id": 30,
    "date": "30-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.16",
    "title": "Repeating signals"
  },
  {
    "id": 31,
    "date": "31-01-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.17",
    "title": "Distinguishing markers and signs for signals"
  },
  {
    "id": 32,
    "date": "01-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.18",
    "title": "Signals out of use"
  },
  {
    "id": 33,
    "date": "02-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.19",
    "title": "Placing of Stop signals at diverging junctions"
  },
  {
    "id": 34,
    "date": "03-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.20",
    "title": "Placing of Stop signals at converging junctions"
  },
  {
    "id": 35,
    "date": "04-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.21",
    "title": "Signals on bracket post or signal bridge or gantry"
  },
  {
    "id": 36,
    "date": "05-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.22",
    "title": "Placing of more than one signal on the same post"
  },
  {
    "id": 37,
    "date": "06-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.23",
    "title": "Electric repeater"
  },
  {
    "id": 38,
    "date": "07-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.24",
    "title": "Back lights"
  },
  {
    "id": 39,
    "date": "08-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.25",
    "title": "Obligation to provide fixed signals at stations"
  },
  {
    "id": 40,
    "date": "09-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.26",
    "title": "Commissioning of fixed signals"
  },
  {
    "id": 41,
    "date": "10-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.27",
    "title": "Minimum equipment of fixed signals at stations provided with manually operated multiple-aspect signalling"
  },
  {
    "id": 42,
    "date": "11-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.28",
    "title": "Minimum equipment of fixed signals at stations provided with modified lower quadrant signalling"
  },
  {
    "id": 43,
    "date": "12-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.29",
    "title": "Minimum equipment of fixed signals at other stations provided with two-aspect signalling"
  },
  {
    "id": 44,
    "date": "13-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.30",
    "title": "Additional fixed signals at stations generally"
  },
  {
    "id": 45,
    "date": "14-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.31",
    "title": "Signals at class 'D' stations"
  },
  {
    "id": 46,
    "date": "15-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.32",
    "title": "Provision of an Advanced Starter, Shunting Limit Board or Block Section Limit Board"
  },
  {
    "id": 47,
    "date": "16-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.33",
    "title": "Exceptions to Rules 3.27, 3.28, 3.29 and 3.32"
  },
  {
    "id": 48,
    "date": "17-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.34",
    "title": "Fixed signals at level crossings"
  },
  {
    "id": 49,
    "date": "18-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.35",
    "title": "Protection and working of points of outlying sidings"
  },
  {
    "id": 50,
    "date": "19-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.36",
    "title": "Fixed signals generally"
  },
  {
    "id": 51,
    "date": "20-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.37",
    "title": "Normal aspects of signals"
  },
  {
    "id": 52,
    "date": "21-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.38",
    "title": "Points affecting movement of trains"
  },
  {
    "id": 53,
    "date": "22-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.39",
    "title": "Locking of facing points"
  },
  {
    "id": 54,
    "date": "23-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.40",
    "title": "Conditions for taking 'off' Home signal"
  },
  {
    "id": 55,
    "date": "24-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.41",
    "title": "Conditions for taking 'off' Outer signal"
  },
  {
    "id": 56,
    "date": "25-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.42",
    "title": "Conditions for taking 'off' last Stop signal or Intermediate Block Stop signal"
  },
  {
    "id": 57,
    "date": "26-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.43",
    "title": "Conditions for taking 'off' Warner signal"
  },
  {
    "id": 58,
    "date": "27-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.44",
    "title": "Conditions for taking 'off' gate Stop signal"
  },
  {
    "id": 59,
    "date": "28-02-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.45",
    "title": "Conditions for taking 'off' Calling-on signal"
  },
  {
    "id": 60,
    "date": "01-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.46",
    "title": "Use of fixed signals for shunting"
  },
  {
    "id": 61,
    "date": "02-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.47",
    "title": "Taking 'off' signals for more than one train at a time"
  },
  {
    "id": 62,
    "date": "03-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.48",
    "title": "Stoppage of trains out of course at stations provided with two-aspect signalling"
  },
  {
    "id": 63,
    "date": "04-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.49",
    "title": "Care and lighting of signal lamps"
  },
  {
    "id": 64,
    "date": "05-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.50",
    "title": "Traps, slip sidings and catch sidings"
  },
  {
    "id": 65,
    "date": "06-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.51",
    "title": "Points"
  },
  {
    "id": 66,
    "date": "07-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.52",
    "title": "Exhibition of hand signals"
  },
  {
    "id": 67,
    "date": "08-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.53",
    "title": "Stop hand signal"
  },
  {
    "id": 68,
    "date": "09-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.54",
    "title": "Proceed hand signal"
  },
  {
    "id": 69,
    "date": "10-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.55",
    "title": "Proceed with caution hand signal"
  },
  {
    "id": 70,
    "date": "11-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.56",
    "title": "Hand signals for shunting"
  },
  {
    "id": 71,
    "date": "12-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.57",
    "title": "Banner flags"
  },
  {
    "id": 72,
    "date": "13-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.58",
    "title": "Knowledge and possession of hand signals"
  },
  {
    "id": 73,
    "date": "14-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.59",
    "title": "Description of detonating signals"
  },
  {
    "id": 74,
    "date": "15-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.60",
    "title": "Method of using detonators"
  },
  {
    "id": 75,
    "date": "16-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.61",
    "title": "Placing of detonators in thick, foggy or tempestuous weather impairing visibility"
  },
  {
    "id": 76,
    "date": "17-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.62",
    "title": "Placing of detonators in case of obstruction"
  },
  {
    "id": 77,
    "date": "18-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.63",
    "title": "Replacement of detonators on the line"
  },
  {
    "id": 78,
    "date": "19-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.64",
    "title": "Knowledge and possession of detonators"
  },
  {
    "id": 79,
    "date": "20-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.65",
    "title": "Description of flare signals"
  },
  {
    "id": 80,
    "date": "21-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.66",
    "title": "Use of flare signals"
  },
  {
    "id": 81,
    "date": "22-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.67",
    "title": "Knowledge and possession of flare signals"
  },
  {
    "id": 82,
    "date": "23-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.68",
    "title": "Duties of Station Master generally when a signal is defective"
  },
  {
    "id": 83,
    "date": "24-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.69",
    "title": "Duties of Station Master when an approach Stop signal is defective"
  },
  {
    "id": 84,
    "date": "25-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.70",
    "title": "Duties of Station Master when a departure Stop signal is defective"
  },
  {
    "id": 85,
    "date": "26-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.71",
    "title": "Warner or Distant signals defective in the 'off' position"
  },
  {
    "id": 86,
    "date": "27-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.72",
    "title": "Warner not to be used when a Stop signal is defective"
  },
  {
    "id": 87,
    "date": "28-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.73",
    "title": "Passing of a gate Stop signal at 'on'"
  },
  {
    "id": 88,
    "date": "29-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.74",
    "title": "Absence of a fixed signal or a signal without a light"
  },
  {
    "id": 89,
    "date": "30-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.75",
    "title": "Passing of Intermediate Block Stop signal at 'on'"
  },
  {
    "id": 90,
    "date": "31-03-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.76",
    "title": "Intimation to officials when defects remedied"
  },
  {
    "id": 91,
    "date": "01-04-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.77",
    "title": "Defective or damaged points etc."
  },
  {
    "id": 92,
    "date": "02-04-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.78",
    "title": "Duties of engine crew in respect of signals"
  },
  {
    "id": 93,
    "date": "03-04-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.79",
    "title": "Duties of Loco Pilot in respect of Calling-on signal"
  },
  {
    "id": 94,
    "date": "04-04-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.80",
    "title": "Duties of Loco Pilot when an approach Stop signal is 'on' or defective"
  },
  {
    "id": 95,
    "date": "05-04-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.81",
    "title": "Duties of Loco Pilot when a departure Stop signal is 'on' or defective"
  },
  {
    "id": 96,
    "date": "06-04-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.82",
    "title": "Permission before entering on or crossing a running line"
  },
  {
    "id": 97,
    "date": "07-04-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.83",
    "title": "Assistance of the engine crew regarding signals"
  },
  {
    "id": 98,
    "date": "08-04-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.84",
    "title": "Duties of Loco Pilots as to signals when two or more engines are attached to train"
  },
  {
    "id": 99,
    "date": "09-04-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.85",
    "title": "Reporting of defects in signals"
  },
  {
    "id": 100,
    "date": "10-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.01",
    "title": "Standard time"
  },
  {
    "id": 101,
    "date": "11-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.02",
    "title": "Adherence to advertised time"
  },
  {
    "id": 102,
    "date": "12-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.03",
    "title": "Setting watch"
  },
  {
    "id": 103,
    "date": "13-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.04",
    "title": "Time of attendance for train crew"
  },
  {
    "id": 104,
    "date": "14-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.05",
    "title": "Proper running line"
  },
  {
    "id": 105,
    "date": "15-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.06",
    "title": "Direction of running"
  },
  {
    "id": 106,
    "date": "16-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.07",
    "title": "Supply of Working Time Table and Schedule of Standard Dimensions"
  },
  {
    "id": 107,
    "date": "17-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.08",
    "title": "Limits of speed generally"
  },
  {
    "id": 108,
    "date": "18-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.09",
    "title": "Caution Order"
  },
  {
    "id": 109,
    "date": "19-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.10",
    "title": "Limits of speed over facing points"
  },
  {
    "id": 110,
    "date": "20-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.11",
    "title": "Limits of speed while running through stations"
  },
  {
    "id": 111,
    "date": "21-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.12",
    "title": "Engine pushing"
  },
  {
    "id": 112,
    "date": "22-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.13",
    "title": "Limits of speed with engine tender foremost"
  },
  {
    "id": 113,
    "date": "23-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.14",
    "title": "Head light, marker lights and speedometer"
  },
  {
    "id": 114,
    "date": "24-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.15",
    "title": "Tail and side lights"
  },
  {
    "id": 115,
    "date": "25-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.16",
    "title": "Tail board or tail lamp 99"
  },
  {
    "id": 116,
    "date": "26-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.17",
    "title": "Responsibility of Station Master regarding tail board or tail lamp of passing trains"
  },
  {
    "id": 117,
    "date": "27-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.18",
    "title": "Means of communication"
  },
  {
    "id": 118,
    "date": "28-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.19",
    "title": "Guard's and Loco Pilot's equipment"
  },
  {
    "id": 119,
    "date": "29-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.20",
    "title": "Manning of engine in motion"
  },
  {
    "id": 120,
    "date": "30-04-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.21",
    "title": "Driving an electric train"
  },
  {
    "id": 121,
    "date": "01-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.22",
    "title": "Riding on engine or tender"
  },
  {
    "id": 122,
    "date": "02-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.23",
    "title": "Brake-vans"
  },
  {
    "id": 123,
    "date": "03-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.24",
    "title": "Position of brake-van on train"
  },
  {
    "id": 124,
    "date": "04-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.25",
    "title": "Guards"
  },
  {
    "id": 125,
    "date": "05-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.26",
    "title": "Couplings"
  },
  {
    "id": 126,
    "date": "06-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.27",
    "title": "Cranes"
  },
  {
    "id": 127,
    "date": "07-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.28",
    "title": "Loading of vehicles"
  },
  {
    "id": 128,
    "date": "08-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.29",
    "title": "Damaged or defective vehicles"
  },
  {
    "id": 129,
    "date": "09-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.30",
    "title": "Loco Pilot and Guard to examine notices before starting"
  },
  {
    "id": 130,
    "date": "10-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.31",
    "title": "Examination of trains before starting"
  },
  {
    "id": 131,
    "date": "11-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.32",
    "title": "Examination of trains by Loco Pilot"
  },
  {
    "id": 132,
    "date": "12-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.33",
    "title": "Examination of single and multiple units by Loco Pilot"
  },
  {
    "id": 133,
    "date": "13-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.34",
    "title": "Duties of Guard when taking over charge of a train"
  },
  {
    "id": 134,
    "date": "14-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.35",
    "title": "Starting of trains"
  },
  {
    "id": 135,
    "date": "15-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.36",
    "title": "Guard to be in charge of train"
  },
  {
    "id": 136,
    "date": "16-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.37",
    "title": "Subordination of Guards in station limits"
  },
  {
    "id": 137,
    "date": "17-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.38",
    "title": "Assistant Loco Pilots to obey Loco Pilots"
  },
  {
    "id": 138,
    "date": "18-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.39",
    "title": "Loco Pilot to obey certain orders"
  },
  {
    "id": 139,
    "date": "19-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.40",
    "title": "Loco Pilot and Assistant Loco Pilot to keep a good look-out"
  },
  {
    "id": 140,
    "date": "20-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.41",
    "title": "Loco Pilot and Assistant Loco Pilot to look back"
  },
  {
    "id": 141,
    "date": "21-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.42",
    "title": "Exchange of signals between Loco Pilot, Guard and station staff"
  },
  {
    "id": 142,
    "date": "22-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.43",
    "title": "Guard to keep a good look-out"
  },
  {
    "id": 143,
    "date": "23-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.44",
    "title": "Train held up at first Stop signal"
  },
  {
    "id": 144,
    "date": "24-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.45",
    "title": "Attracting attention of Loco Pilot"
  },
  {
    "id": 145,
    "date": "25-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.46",
    "title": "Assistance from Guard's hand brake"
  },
  {
    "id": 146,
    "date": "26-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.47",
    "title": "Application of Guard's hand brake"
  },
  {
    "id": 147,
    "date": "27-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.48",
    "title": "Permission of Guard to detach engine from train"
  },
  {
    "id": 148,
    "date": "28-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.49",
    "title": "Starting and stopping of train"
  },
  {
    "id": 149,
    "date": "29-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.50",
    "title": "Sounding of engine whistle"
  },
  {
    "id": 150,
    "date": "30-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.51",
    "title": "Bell signals between Loco Pilot and Guard"
  },
  {
    "id": 151,
    "date": "31-05-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.52",
    "title": "Throwing out water, fire or cinders"
  },
  {
    "id": 152,
    "date": "01-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.53",
    "title": "Hose or water crane"
  },
  {
    "id": 153,
    "date": "02-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.54",
    "title": "Passengers"
  },
  {
    "id": 154,
    "date": "03-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.55",
    "title": "Shutting of power"
  },
  {
    "id": 155,
    "date": "04-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.56",
    "title": "Guard to see that train is stopped clear of fouling marks"
  },
  {
    "id": 156,
    "date": "05-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.57",
    "title": "Detaching engine"
  },
  {
    "id": 157,
    "date": "06-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.58",
    "title": "Loco Pilot to see that train is stopped clear of fouling marks"
  },
  {
    "id": 158,
    "date": "07-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.59",
    "title": "Moving of train carrying passengers after it has been stopped at a station"
  },
  {
    "id": 159,
    "date": "08-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.60",
    "title": "Guard not to leave train till handed over"
  },
  {
    "id": 160,
    "date": "09-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.61",
    "title": "Loco Pilot not to leave engine when on duty"
  },
  {
    "id": 161,
    "date": "10-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.62",
    "title": "Working of a material train in a block section"
  },
  {
    "id": 162,
    "date": "11-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.63",
    "title": "Workers on material train"
  },
  {
    "id": 163,
    "date": "12-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.64",
    "title": "Protection of material train when stabled"
  },
  {
    "id": 164,
    "date": "13-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.65",
    "title": "Working of track maintenance machines"
  },
  {
    "id": 165,
    "date": "14-06-2026",
    "chapter": "CHAPTER IV - WORKING OF TRAINS GENERALLY",
    "rule": "4.66",
    "title": "Private engines and vehicles"
  },
  {
    "id": 166,
    "date": "15-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.01",
    "title": "Responsibility of the Station Master for working"
  },
  {
    "id": 167,
    "date": "16-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.02",
    "title": "Supply of copies of rules and distribution or exhibition of other documents"
  },
  {
    "id": 168,
    "date": "17-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.03",
    "title": "Obedience to orders and keeping of books and returns"
  },
  {
    "id": 169,
    "date": "18-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.04",
    "title": "Signal cabins"
  },
  {
    "id": 170,
    "date": "19-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.05",
    "title": "Report of neglect of duty"
  },
  {
    "id": 171,
    "date": "20-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.06",
    "title": "Station Working Rules"
  },
  {
    "id": 172,
    "date": "21-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.07",
    "title": "Forms"
  },
  {
    "id": 173,
    "date": "22-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.08",
    "title": "Access to and operation of equipment"
  },
  {
    "id": 174,
    "date": "23-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.09",
    "title": "Reception of a train on an obstructed line"
  },
  {
    "id": 175,
    "date": "24-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.10",
    "title": "Reception of a train on a non-signalled line"
  },
  {
    "id": 176,
    "date": "25-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.11",
    "title": "Departure of a train from a non-signalled line"
  },
  {
    "id": 177,
    "date": "26-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.12",
    "title": "Departure of a train from a line provided with a common departure signal"
  },
  {
    "id": 178,
    "date": "27-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.13",
    "title": "Control of shunting"
  },
  {
    "id": 179,
    "date": "28-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.14",
    "title": "Responsibility for shunting"
  },
  {
    "id": 180,
    "date": "29-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.15",
    "title": "Shunting at stations under Centralised Traffic Control"
  },
  {
    "id": 181,
    "date": "30-06-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.16",
    "title": "Shunting during reception of trains"
  },
  {
    "id": 182,
    "date": "01-07-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.17",
    "title": "Shunting near level crossing"
  },
  {
    "id": 183,
    "date": "02-07-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.18",
    "title": "Drawing of a train to an advanced position"
  },
  {
    "id": 184,
    "date": "03-07-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.19",
    "title": "Obstruction of running line"
  },
  {
    "id": 185,
    "date": "04-07-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.20",
    "title": "Shunting on gradients"
  },
  {
    "id": 186,
    "date": "05-07-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.21",
    "title": "Loose shunting"
  },
  {
    "id": 187,
    "date": "06-07-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.22",
    "title": "Leaving vehicles in sidings outside station limits"
  },
  {
    "id": 188,
    "date": "07-07-2026",
    "chapter": "CHAPTER V - CONTROL AND WORKING OF STATIONS",
    "rule": "5.23",
    "title": "Securing of vehicles at station"
  },
  {
    "id": 189,
    "date": "08-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.01",
    "title": "Accident or obstruction"
  },
  {
    "id": 190,
    "date": "09-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.02",
    "title": "Working in case of accident or failure of communications"
  },
  {
    "id": 191,
    "date": "10-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.03",
    "title": "Protection of trains stopped between stations"
  },
  {
    "id": 192,
    "date": "11-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.04",
    "title": "Trains unusually delayed"
  },
  {
    "id": 193,
    "date": "12-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.05",
    "title": "Sending advice of accident or breakdown"
  },
  {
    "id": 194,
    "date": "13-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.06",
    "title": "Train in a block section without authority to proceed"
  },
  {
    "id": 195,
    "date": "14-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.07",
    "title": "Report of conditions likely to affect running of trains to Controller or Centralised Traffic Control Operator"
  },
  {
    "id": 196,
    "date": "15-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.08",
    "title": "Train parting"
  },
  {
    "id": 197,
    "date": "16-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.09",
    "title": "Portion of a train left in a block section"
  },
  {
    "id": 198,
    "date": "17-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.10",
    "title": "Fire"
  },
  {
    "id": 199,
    "date": "18-07-2026",
    "chapter": "CHAPTER VI - ACCIDENTS AND UNUSUAL OCCURRENCES",
    "rule": "6.11",
    "title": "Vehicles escaping from station"
  },
  {
    "id": 200,
    "date": "19-07-2026",
    "chapter": "CHAPTER VII - SYSTEM OF WORKING",
    "rule": "7.01",
    "title": "Systems of working"
  },
  {
    "id": 201,
    "date": "20-07-2026",
    "chapter": "CHAPTER VII - SYSTEM OF WORKING",
    "rule": "7.02",
    "title": "Applicability of General Rules referring to the working of signals and trains"
  },
  {
    "id": 202,
    "date": "21-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.01",
    "title": "Essential of the Absolute Block System"
  },
  {
    "id": 203,
    "date": "22-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.02",
    "title": "Conditions for granting Line Clear at a class 'A' station"
  },
  {
    "id": 204,
    "date": "23-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.03",
    "title": "Conditions for granting Line Clear at a class 'B' station"
  },
  {
    "id": 205,
    "date": "24-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.04",
    "title": "Conditions for granting Line Clear at a class 'C station"
  },
  {
    "id": 206,
    "date": "25-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.05",
    "title": "Obstruction on double line at a block station when a train is approaching"
  },
  {
    "id": 207,
    "date": "26-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.06",
    "title": "Obstruction on double line in the block section"
  },
  {
    "id": 208,
    "date": "27-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.07",
    "title": "Obstruction on single line at a class 'A' station when a train is approaching"
  },
  {
    "id": 209,
    "date": "28-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.08",
    "title": "Obstructing the block section at a class 'A' station on a single line"
  },
  {
    "id": 210,
    "date": "29-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.09",
    "title": "Obstruction in the face of an approaching train at a class 'B' station on single line"
  },
  {
    "id": 211,
    "date": "30-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.10",
    "title": "Obstruction within station section at a class 'B' station on single line"
  },
  {
    "id": 212,
    "date": "31-07-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.11",
    "title": "Obstruction outside station section at a class 'B' single line station equipped with two-aspect signals"
  },
  {
    "id": 213,
    "date": "01-08-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.12",
    "title": "Obstruction outside station section at a class 'B' single line station equipped with manually operated multiple-aspect signals"
  },
  {
    "id": 214,
    "date": "02-08-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.13",
    "title": "Obstruction outside the first Stop signal at a class 'B' station on single line"
  },
  {
    "id": 215,
    "date": "03-08-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.14",
    "title": "Block back or Block forward"
  },
  {
    "id": 216,
    "date": "04-08-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.15",
    "title": "Authority for shunting or obstruction in block section"
  },
  {
    "id": 217,
    "date": "05-08-2026",
    "chapter": "CHAPTER VIII - THE ABSOLUTE BLOCK SYSTEM",
    "rule": "8.16",
    "title": "Illustrative diagrams"
  },
  {
    "id": 218,
    "date": "06-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.01",
    "title": "Essentials of the Automatic Block System on double line"
  },
  {
    "id": 219,
    "date": "07-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.02",
    "title": "Duties of Loco Pilot and Guard when an Automatic Stop signal on double line is to be passed at 'on'"
  },
  {
    "id": 220,
    "date": "08-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.03",
    "title": "Essentials of the Automatic Block System on single line"
  },
  {
    "id": 221,
    "date": "09-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.04",
    "title": "Minimum equipment of fixed signals in Automatic Block territory on single line"
  },
  {
    "id": 222,
    "date": "10-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.05",
    "title": "Additional fixed signals in Automatic Block territory on single line"
  },
  {
    "id": 223,
    "date": "11-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.06",
    "title": "Conditions for taking 'off' manual Stop signals in Automatic Block territory on single line"
  },
  {
    "id": 224,
    "date": "12-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.07",
    "title": "Duties of Loco Pilot and Guard when an Automatic Stop signal on single line is to be passed at 'on'"
  },
  {
    "id": 225,
    "date": "13-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.08",
    "title": "Person in charge of working trains on Automatic Block System on single line"
  },
  {
    "id": 226,
    "date": "14-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.09",
    "title": "Working of trains on Centralised Traffic Control territory"
  },
  {
    "id": 227,
    "date": "15-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.10",
    "title": "Protection of a train stopped in an Automatic Block signalling section"
  },
  {
    "id": 228,
    "date": "16-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.11",
    "title": "Loco Pilot to report failures"
  },
  {
    "id": 229,
    "date": "17-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.12",
    "title": "Procedure during failure of Automatic Signalling"
  },
  {
    "id": 230,
    "date": "18-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.13",
    "title": "Movement of trains against the direction of traffic on the Automatic Block System"
  },
  {
    "id": 231,
    "date": "19-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.14",
    "title": "Procedure when Semi-Automatic Stop signal is 'on'"
  },
  {
    "id": 232,
    "date": "20-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.15",
    "title": "Passing a gate Stop signal at 'on' in Automatic signalling territory"
  },
  {
    "id": 233,
    "date": "21-08-2026",
    "chapter": "CHAPTER IX - THE AUTOMATIC BLOCK SYSTEM",
    "rule": "9.16",
    "title": "Illustrative diagrams"
  },
  {
    "id": 234,
    "date": "22-08-2026",
    "chapter": "CHAPTER X - THE FOLLOWING TRAINS SYSTEM",
    "rule": "10.01",
    "title": "Essential of the Following Trains System"
  },
  {
    "id": 235,
    "date": "23-08-2026",
    "chapter": "CHAPTER X - THE FOLLOWING TRAINS SYSTEM",
    "rule": "10.02",
    "title": "Report of the Commissioner of Railway Safety"
  },
  {
    "id": 236,
    "date": "24-08-2026",
    "chapter": "CHAPTER X - THE FOLLOWING TRAINS SYSTEM",
    "rule": "10.03",
    "title": "Conditions to be observed in working trains on the Following Trains System"
  },
  {
    "id": 237,
    "date": "25-08-2026",
    "chapter": "CHAPTER X - THE FOLLOWING TRAINS SYSTEM",
    "rule": "10.04",
    "title": "Delivery of authority to proceed to Loco Pilot or Guard on the Following Trains System"
  },
  {
    "id": 238,
    "date": "26-08-2026",
    "chapter": "CHAPTER X - THE FOLLOWING TRAINS SYSTEM",
    "rule": "10.05",
    "title": "Authority to proceed on the Following Trains System"
  },
  {
    "id": 239,
    "date": "27-08-2026",
    "chapter": "CHAPTER X - THE FOLLOWING TRAINS SYSTEM",
    "rule": "10.06",
    "title": "Responsibility as to proper preparation of authority to proceed on the Following Train System"
  },
  {
    "id": 240,
    "date": "28-08-2026",
    "chapter": "CHAPTER X - THE FOLLOWING TRAINS SYSTEM",
    "rule": "10.07",
    "title": "Obstruction in the face of approaching train or trains on the Following Trains System"
  },
  {
    "id": 241,
    "date": "29-08-2026",
    "chapter": "CHAPTER X - THE FOLLOWING TRAINS SYSTEM",
    "rule": "10.08",
    "title": "Cessation of working on the Following Trains System"
  },
  {
    "id": 242,
    "date": "30-08-2026",
    "chapter": "CHAPTER X - THE FOLLOWING TRAINS SYSTEM",
    "rule": "10.09",
    "title": "Protection of trains on the Following Trains System"
  },
  {
    "id": 243,
    "date": "31-08-2026",
    "chapter": "CHAPTER XI - THE PILOT GUARD SYSTEM",
    "rule": "11.01",
    "title": "Essentials of the Pilot Guard System"
  },
  {
    "id": 244,
    "date": "01-09-2026",
    "chapter": "CHAPTER XI - THE PILOT GUARD SYSTEM",
    "rule": "11.02",
    "title": "Conditions to be observed for following trains on the Pilot Guard System"
  },
  {
    "id": 245,
    "date": "02-09-2026",
    "chapter": "CHAPTER XI - THE PILOT GUARD SYSTEM",
    "rule": "11.03",
    "title": "Pilot Guard's dress or badge"
  },
  {
    "id": 246,
    "date": "03-09-2026",
    "chapter": "CHAPTER XI - THE PILOT GUARD SYSTEM",
    "rule": "11.04",
    "title": "Pilot Guard to accompany train or give authority to proceed"
  },
  {
    "id": 247,
    "date": "04-09-2026",
    "chapter": "CHAPTER XI - THE PILOT GUARD SYSTEM",
    "rule": "11.05",
    "title": "Pilot Guard's Tickets"
  },
  {
    "id": 248,
    "date": "05-09-2026",
    "chapter": "CHAPTER XI - THE PILOT GUARD SYSTEM",
    "rule": "11.06",
    "title": "Protection of trains on the Pilot Guard System"
  },
  {
    "id": 249,
    "date": "06-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.01",
    "title": "Essentials of the Train-staff and Ticket System"
  },
  {
    "id": 250,
    "date": "07-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.02",
    "title": "System where applicable"
  },
  {
    "id": 251,
    "date": "08-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.03",
    "title": "Conditions to be observed for following trains on the Train-staff and Ticket System"
  },
  {
    "id": 252,
    "date": "09-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.04",
    "title": "Loco Pilot to have Train-staff or Train-staff Ticket"
  },
  {
    "id": 253,
    "date": "10-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "2.05",
    "title": "Train-staff or Train-staff Ticket: by whom to be delivered to Loco Pilot"
  },
  {
    "id": 254,
    "date": "11-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.06",
    "title": "Train-staff or Train-staff Ticket: when to be delivered to Loco Pilot"
  },
  {
    "id": 255,
    "date": "12-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.07",
    "title": "Train-staff to be kept on engine"
  },
  {
    "id": 256,
    "date": "13-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.08",
    "title": "Trains not to be started until Train-staff returned"
  },
  {
    "id": 257,
    "date": "14-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.09",
    "title": "Train-staff or Train-staff Ticket to be given up and Ticket to be cancelled on arrival of train"
  },
  {
    "id": 258,
    "date": "15-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.10",
    "title": "Procedure when engine is disabled on the Train-Staff and Ticket System"
  },
  {
    "id": 259,
    "date": "16-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.11",
    "title": "Train-Staff Ticket: how kept"
  },
  {
    "id": 260,
    "date": "17-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.12",
    "title": "Train-staff: how kept"
  },
  {
    "id": 261,
    "date": "18-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.13",
    "title": "Distinguishing marks on Train-staff Tickets and boxes"
  },
  {
    "id": 262,
    "date": "19-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.14",
    "title": "Form of Train-staff Ticket"
  },
  {
    "id": 263,
    "date": "20-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.15",
    "title": "Record of Train-staff Tickets issued"
  },
  {
    "id": 264,
    "date": "21-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.16",
    "title": "Obstruction outside the Home signal"
  },
  {
    "id": 265,
    "date": "22-09-2026",
    "chapter": "CHAPTER XII - THE TRAIN-STAFF AND TICKET SYSTEM",
    "rule": "12.17",
    "title": "Protection of trains on the Train-staff and Ticket System"
  },
  {
    "id": 266,
    "date": "23-09-2026",
    "chapter": "CHAPTER XIII - THE ONE TRAIN ONLY SYSTEM",
    "rule": "13.01",
    "title": "Use of the One Train Only System"
  },
  {
    "id": 267,
    "date": "24-09-2026",
    "chapter": "CHAPTER XIII - THE ONE TRAIN ONLY SYSTEM",
    "rule": "13.02",
    "title": "Essentials of the One Train Only System"
  },
  {
    "id": 268,
    "date": "25-09-2026",
    "chapter": "CHAPTER XIII - THE ONE TRAIN ONLY SYSTEM",
    "rule": "13.03",
    "title": "Authority to enter the section"
  },
  {
    "id": 269,
    "date": "26-09-2026",
    "chapter": "CHAPTER XIII - THE ONE TRAIN ONLY SYSTEM",
    "rule": "13.04",
    "title": "Procedure in case of accident or disablement on the One Train Only System"
  },
  {
    "id": 270,
    "date": "27-09-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.01",
    "title": "Means of granting or obtaining Line Clear"
  },
  {
    "id": 271,
    "date": "28-09-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.02",
    "title": "Provision of Instruments"
  },
  {
    "id": 272,
    "date": "29-09-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.03",
    "title": "Consent required before interfering with Block working equipment"
  },
  {
    "id": 273,
    "date": "30-09-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.04",
    "title": "Certificate of competency"
  },
  {
    "id": 274,
    "date": "01-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.05",
    "title": "Bell code"
  },
  {
    "id": 275,
    "date": "02-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.06",
    "title": "Acknowledgement of signals"
  },
  {
    "id": 276,
    "date": "03-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.07",
    "title": "Train Signal Register"
  },
  {
    "id": 277,
    "date": "04-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.08",
    "title": "Authority to proceed"
  },
  {
    "id": 278,
    "date": "05-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.09",
    "title": "Loco Pilot to examine authority to proceed"
  },
  {
    "id": 279,
    "date": "06-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.10",
    "title": "Conditions for closing the block section"
  },
  {
    "id": 280,
    "date": "07-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.11",
    "title": "Responsibility of Station Master as to authority to proceed"
  },
  {
    "id": 281,
    "date": "08-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.12",
    "title": "Special responsibility as to electrical token instruments and to the token"
  },
  {
    "id": 282,
    "date": "09-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.13",
    "title": "Failure of electrical block instruments or track Circuits or axle counters"
  },
  {
    "id": 283,
    "date": "10-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.14",
    "title": "Closing of Intermediate Block Post"
  },
  {
    "id": 284,
    "date": "11-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.15",
    "title": "Transmission of signals"
  },
  {
    "id": 285,
    "date": "12-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.16",
    "title": "Train Signal Register"
  },
  {
    "id": 286,
    "date": "13-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.17",
    "title": "Forms for messages and written authority to proceed"
  },
  {
    "id": 287,
    "date": "14-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.18",
    "title": "Distinction of messages"
  },
  {
    "id": 288,
    "date": "15-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.19",
    "title": "Writing and signing of messages and written authorities to proceed"
  },
  {
    "id": 289,
    "date": "16-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.20",
    "title": "Completion of messages"
  },
  {
    "id": 290,
    "date": "17-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.21",
    "title": "Preservation of messages and written authorities to proceed"
  },
  {
    "id": 291,
    "date": "18-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.22",
    "title": "Cancellation of Line Clear"
  },
  {
    "id": 292,
    "date": "19-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.23",
    "title": "Loco Pilot to have authority to proceed"
  },
  {
    "id": 293,
    "date": "20-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.24",
    "title": "Authority to proceed: when to be given to Loco Pilot"
  },
  {
    "id": 294,
    "date": "21-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.25",
    "title": "Line clear Tickets"
  },
  {
    "id": 295,
    "date": "22-10-2026",
    "chapter": "CHAPTER XIV - BLOCK WORKING",
    "rule": "14.26",
    "title": "Use and operation of block working equipment"
  },
  {
    "id": 296,
    "date": "23-10-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.01",
    "title": "Condition of Permanent Way and Works"
  },
  {
    "id": 297,
    "date": "24-10-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.02",
    "title": "Maintenance of line"
  },
  {
    "id": 298,
    "date": "25-10-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.03",
    "title": "Keeping of material"
  },
  {
    "id": 299,
    "date": "26-10-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.04",
    "title": "Inspection of Permanent Way and Works"
  },
  {
    "id": 300,
    "date": "27-10-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.05",
    "title": "Patrolling of Lines"
  },
  {
    "id": 301,
    "date": "28-10-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.06",
    "title": "Work involving danger to trains or traffic"
  },
  {
    "id": 302,
    "date": "29-10-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.07",
    "title": "Work in thick, foggy or tempestuous weather impairing visibility"
  },
  {
    "id": 303,
    "date": "30-10-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.08",
    "title": "Precautions before commencing operations which would obstruct the line"
  },
  {
    "id": 304,
    "date": "31-10-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.09",
    "title": "Showing of signals"
  },
  {
    "id": 305,
    "date": "01-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.10",
    "title": "Assistance in protection of trains"
  },
  {
    "id": 306,
    "date": "02-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.11",
    "title": "Gangmate in each gang"
  },
  {
    "id": 307,
    "date": "03-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.12",
    "title": "Knowledge of signals and equipment of gang"
  },
  {
    "id": 308,
    "date": "04-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.13",
    "title": "Inspection of gauges, signals, tools and implements"
  },
  {
    "id": 309,
    "date": "05-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.14",
    "title": "Responsibility of Gangmate as to safety of line"
  },
  {
    "id": 310,
    "date": "06-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.15",
    "title": "Blasting"
  },
  {
    "id": 311,
    "date": "07-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.16",
    "title": "Putting in or removing points or crossings"
  },
  {
    "id": 312,
    "date": "08-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.17",
    "title": "Duties of Gangmate and Gangman when apprehending danger"
  },
  {
    "id": 313,
    "date": "09-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.18",
    "title": "Distinction between trolley, lorry and motor trolley"
  },
  {
    "id": 314,
    "date": "10-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.19",
    "title": "Red flag or light to be shown"
  },
  {
    "id": 315,
    "date": "11-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.20",
    "title": "Equipment of trolley, lorry or motor trolley"
  },
  {
    "id": 316,
    "date": "12-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.21",
    "title": "Efficient brakes"
  },
  {
    "id": 317,
    "date": "13-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.22",
    "title": "Qualified person to be in charge of lorry or trolley when on the line"
  },
  {
    "id": 318,
    "date": "14-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.23",
    "title": "Attachment to train prohibited"
  },
  {
    "id": 319,
    "date": "15-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.24",
    "title": "Time of running"
  },
  {
    "id": 320,
    "date": "16-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.25",
    "title": "Motor Trolley"
  },
  {
    "id": 321,
    "date": "17-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.26",
    "title": "Protection of trolley on the line"
  },
  {
    "id": 322,
    "date": "18-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.27",
    "title": "Protection of lorry on the line"
  },
  {
    "id": 323,
    "date": "19-11-2026",
    "chapter": "CHAPTER XV - PERMANENT WAY AND WORKS",
    "rule": "15.28",
    "title": "Lorries and trolleys out of use"
  },
  {
    "id": 324,
    "date": "20-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.01",
    "title": "Knowledge of signals"
  },
  {
    "id": 325,
    "date": "21-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.02",
    "title": "Supply and care of equipment"
  },
  {
    "id": 326,
    "date": "22-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.03",
    "title": "Road Traffic"
  },
  {
    "id": 327,
    "date": "23-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.04",
    "title": "Gateman to observe passing trains"
  },
  {
    "id": 328,
    "date": "24-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.05",
    "title": "Channel for flange of wheels"
  },
  {
    "id": 329,
    "date": "25-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.06",
    "title": "Defects at level crossings"
  },
  {
    "id": 330,
    "date": "26-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.07",
    "title": "Obstructions at level crossings"
  },
  {
    "id": 331,
    "date": "27-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.08",
    "title": "Parting of a train"
  },
  {
    "id": 332,
    "date": "28-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.09",
    "title": "Trespassing"
  },
  {
    "id": 333,
    "date": "29-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.10",
    "title": "Transfer of charge of gate"
  },
  {
    "id": 334,
    "date": "30-11-2026",
    "chapter": "CHAPTER XVI - LEVEL CROSSINGS",
    "rule": "16.11",
    "title": "Height gauges"
  },
  {
    "id": 335,
    "date": "01-12-2026",
    "chapter": "CHAPTER XVII - WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
    "rule": "17.01",
    "title": "Applicability of General Rules"
  },
  {
    "id": 336,
    "date": "02-12-2026",
    "chapter": "CHAPTER XVII - WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
    "rule": "17.02",
    "title": "Special definitions applicable to this chapter"
  },
  {
    "id": 337,
    "date": "03-12-2026",
    "chapter": "CHAPTER XVII - WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
    "rule": "17.03",
    "title": "Inspection of electrical way and works"
  },
  {
    "id": 338,
    "date": "04-12-2026",
    "chapter": "CHAPTER XVII - WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
    "rule": "17.04",
    "title": "Permit-to-work on electrical equipment"
  },
  {
    "id": 339,
    "date": "05-12-2026",
    "chapter": "CHAPTER XVII - WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
    "rule": "17.05",
    "title": "Warning to staff and public"
  },
  {
    "id": 340,
    "date": "06-12-2026",
    "chapter": "CHAPTER XVII - WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
    "rule": "17.06",
    "title": "Alterations to track"
  },
  {
    "id": 341,
    "date": "07-12-2026",
    "chapter": "CHAPTER XVII - WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
    "rule": "17.07",
    "title": "Tripping of circuit breakers of locomotives and electrical multiple units at neutral sections"
  },
  {
    "id": 342,
    "date": "08-12-2026",
    "chapter": "CHAPTER XVII - WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
    "rule": "17.08",
    "title": "Tower wagon"
  },
  {
    "id": 343,
    "date": "09-12-2026",
    "chapter": "CHAPTER XVII - WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
    "rule": "17.09",
    "title": "Additional rules for electrified sections"
  },
  {
    "id": 344,
    "date": "10-12-2026",
    "chapter": "CHAPTER XVIII - MISCELLANEOUS",
    "rule": "18.01",
    "title": "Repeal and Saving"
  },
  {
    "id": 345,
    "date": "11-12-2026",
    "chapter": "Chapter I - PRELIMINARY",
    "rule": "1.01",
    "title": "Short title and commencement"
  },
  {
    "id": 346,
    "date": "12-12-2026",
    "chapter": "Chapter I - PRELIMINARY",
    "rule": "1.02",
    "title": "Definitions"
  },
  {
    "id": 347,
    "date": "13-12-2026",
    "chapter": "Chapter I - PRELIMINARY",
    "rule": "1.03",
    "title": "Classification of stations"
  },
  {
    "id": 348,
    "date": "14-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.01",
    "title": "Supply of copies of rules"
  },
  {
    "id": 349,
    "date": "15-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.02",
    "title": "Upkeep of the copy of rules"
  },
  {
    "id": 350,
    "date": "16-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.03",
    "title": "Knowledge of rules"
  },
  {
    "id": 351,
    "date": "17-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.04",
    "title": "Assistance in observance of rules"
  },
  {
    "id": 352,
    "date": "18-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.05",
    "title": "Prevention of trespass, damage or loss"
  },
  {
    "id": 353,
    "date": "19-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.06",
    "title": "Obedience to rules and orders"
  },
  {
    "id": 354,
    "date": "20-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.07",
    "title": "Attendance for duty"
  },
  {
    "id": 355,
    "date": "21-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.08",
    "title": "Absence from duty"
  },
  {
    "id": 356,
    "date": "22-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.09",
    "title": "Taking alcoholic drink, sedative, narcotic, stimulant drug or preparation"
  },
  {
    "id": 357,
    "date": "23-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.10",
    "title": "Conduct of railway servants"
  },
  {
    "id": 358,
    "date": "24-12-2026",
    "chapter": "Chapter II - RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    "rule": "2.11",
    "title": "Duty for securing safety"
  },
  {
    "id": 359,
    "date": "25-12-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.01",
    "title": "General use of signals"
  },
  {
    "id": 360,
    "date": "26-12-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.02",
    "title": "Kinds of signals"
  },
  {
    "id": 361,
    "date": "27-12-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.03",
    "title": "Use of night signals by day"
  },
  {
    "id": 362,
    "date": "28-12-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.04",
    "title": "Placing of signals & signal arms and painting of signal arms"
  },
  {
    "id": 363,
    "date": "29-12-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.05",
    "title": "Use of fixed signals"
  },
  {
    "id": 364,
    "date": "30-12-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.06",
    "title": "Description of Warner signals and their indications"
  },
  {
    "id": 365,
    "date": "31-12-2026",
    "chapter": "Chapter III - SIGNALS",
    "rule": "3.07",
    "title": "Description of Distant signals and their indications"
  }
]
