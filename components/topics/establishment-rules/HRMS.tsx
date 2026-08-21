'use client'
import React from 'react'
import {
  BookOpen,
  ClipboardList,
  FileText,
  HelpCircle,
  KeyRound,
  Laptop,
  Phone,
  Receipt,
  Shield,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'

const introParagraphs = [
  'On 21st February 2020, the Chairman, Railway Board launched the Human Resource Management System (HRMS) Mobile App. Indian Railways Department Accounting Information and Management System (AIMS) and Centre for Railway Information System (CRIS) have jointly developed the HRMS Mobile App.',
  'It provides self-service to 13 lakh employees of Indian Railways, which is the 8th largest employer in the world and 4th largest railway network.',
  'Indian Railways employees can view their monthly pay slip, tax forms, Form 16, payment of bills, career development search, Provident Fund, Loans & Advances, Income Tax details and more.',
]

const registrationSteps = [
  'AIMS has initiated the online registration process for AIMS HRMS portal. Indian Railways employees who wish to use AIMS services are advised to follow the process given below.',
  'Visit the official AIMS portal using the URL link as- \'aims.indianrailways.gov.in\'.',
  'After the Railway employee HRMS page loads, click on "Employee Self Service".',
]

const processRoles = [
  { title: 'Unit Admin:', text: 'Unit Admin creates Grievance Incharge Officer (GIO), who becomes the Personal Branch Officer.' },
  { title: 'GIO:', text: 'GIO creates Grievance Welfare Members (GWM), who are staff personnel in the Personal Branch Department, and are responsible for managing the Grievance Cell of their unit.' },
  { title: 'QWM:', text: 'QWM will create the necessary roles for grievance management at the unit level.' },
  { title: 'a) Dept. Dealing Clerks (DDC):', text: 'Creates Department Dealing Clerks (DDC) for handling grievances pertaining to various departments.' },
  { title: 'b) Welfare Inspector:', text: "Assigns stations/offices/bill-units ('Beat Combination') to each Welfare Inspector in the unit." },
]

const grievanceSteps = [
  { num: 4, text: 'Employee grievance registration and history: Employee can login and register his grievance through "Register Grievances" menu. They can also view the history of all grievances submitted by them and withdraw the grievance using this menu.' },
  { num: 5, text: "Grievance reaching Welfare Inspector: After the employee submits his grievance, based on 'Beat Combination', it reaches the concerned Welfare Inspector for processing." },
  { num: 6, text: 'Forwarding by Welfare Inspector to GDC: Welfare Inspector reviews the grievance and forwards it to the concerned Grievance Dealing Clerk (GDC) for redressal. At this level, the employee has the option to return the grievance, and grievances can also be returned through GDCs.' },
  { num: 7, text: 'Grievance processing and closure by GDC: Grievance Dealing Clerk (GDC) processes the grievance and records the closure details. Required closure document can be uploaded and the grievance can be closed or forwarded to the next level.' },
  { num: 8, text: 'Levels of forwarding: Maximum of 3 levels of forwarding are allowed.' },
  { num: 9, text: 'Grievance pertaining to other department: If the grievance pertains to another department, GWI (Grievance Welfare Inspector) selects the concerned department and forwards it to the same.' },
  { num: 10, text: 'Grievance reaching Dept. Dealing Clerk: This grievance reaches the Department Dealing Clerk already created by Grievance Welfare Member.' },
  { num: 11, text: 'Further forwarding by Dept. Dealing Clerk: Department Dealing Clerk can process the case by forwarding to the next level Dealing Clerks.' },
  { num: 12, text: 'Grievance pertaining to other unit: If the grievance pertains to another unit, GWI (Grievance Welfare Inspector) selects the concerned unit and forwards it to the same.' },
  { num: 13, text: 'Grievance reaching Welfare Cell login: This grievance reaches the Welfare Cell login of that particular unit, where any Welfare Cell member can further process it for scrutiny and redressal.' },
  { num: 14, text: 'Grievances not assigned to Welfare Inspector: Grievances submitted by employees for whom Beat Combination is not assigned are available in the Welfare Cell. In-charge Officer or Welfare Cell member can assign such grievance to the concerned Welfare Inspector or Dealing Clerk of Establishment Section.' },
  {
    num: 15,
    text: 'Grievance Cell members and reports: All Grievance Cell members, Unit Admin, Grievance Dealing Clerks (Unit Admin and Grievance Cell members only those they handle) can view the following reports for the entire unit and Dealing Clerk and Welfare Inspector:',
    subItems: [
      'Dashboard Report: It gives total grievances submitted for that unit, total pending, total closed - which can be further drilled down to individual grievance level based on grievance type.',
      'Grievance Status Report: It gives total grievances, closed in time, not closed in time, pending 15 days, pending 15 to 30 days, pending 30 to 45 days, pending 45 to 60 days, pending more than 60 days.',
    ],
  },
]

const settlementGuidelines = [
  'On an average, approximately 30 thousand employees superannuate from different Units of Indian Railways every year. The processes followed to finalise settlement claim of an employee is cumbersome. This web-based Settlement System under HRMS enables the authorities to finalise the settlement of superannuating employee with ease and convenience.',
  'The Settlement System under HRMS displays notification alert to the concerned Service Record Dealing Clerk (SR-DC) to initiate Settlement Process for the employee due to superannuate in next 6 months.',
  'The Settlement System partly pre-populates the Service Record Summary form and presents it before the SR-DC. SR-DC fills in the required information and submits it to the Service Record Verifying Authority (SR-VA) for verification.',
  'SR-VA verifies the service record summary form and forwards it to Service Record Accepting Authority for approval. If found incorrect, SR-VA returns the form with remark to the SR-DC, for necessary correction. SR-VA accepts the Service Record Summary Form if found correct or else returns to the SR-DC for necessary correction. The approved Service Record Summary Form is sent to Settlement Section for necessary action.',
]

const officeOrderFeatures = [
  'Office order module captures all career events of an employee from Entry in IR to Exit.',
  'It generates all office orders and simultaneously updates all data in HRMS /IPAS with trigger of joining / relieving date entry.',
  'Transparency in terms of instant availability of office order to all stake holders including employee concerned through SMS and reflection on the dashboard of all concerned.',
  'Use of QR code which contains information of Office Order attributes and a link to view the actual office Order. It makes the system tamper proof.',
  'Option to use Voice-to-text feature. Using this a user will be able to enter details in Pre-text and Post-text Option to create Customized templates for use with different kinds of Office Orders.',
  'Auto-fetching of existing details (Name, deptt, designation, pay level etc) of employee involved in the Office Order.',
  'Bilingual format (Office Order are available in English and Hindi)',
  'Security with use of DSC by the Accepting Authority while issuing Office Order. Can be made available to general public, if desired.',
]

const eAparFeatures = [
  'It has all the features of SPARROW and has provided facility beyond that for ease of use of all stake holders in terms of writing APAR for non-gaz employees of all departments of IR.',
  'Bilingual format (Office Order are available in English and Hindi) Option to create Customized templates for use with different kinds of rating of an APAR. (e.g. for Very Good, Outstanding etc).',
  'Option to use Voice-to-text feature. Using this, user will be able to enter details against any attribute of APAR.',
  'Predictive text feature for input. User will get a list of possible texts based on part of text typed to make the experience of writing APAR smooth.',
  'Auto mapping of APAR format to employee based on Pay Level, Designation and Department. Auto-fetching of existing details (Name, deptt, designation, pay level etc) as Part-I, Personal Data of APAR Security – Comments and grading by Reporting, Reviewing and Accepting Officer is stored in encrypted format with their respective DSC.',
  'Final APAR in PDF format is digitally signed by the Accepting Authority.',
  'Transparency – Concerned employee will get instant message as soon as APAR is accepted. Employee will be able to view the final Accepted copy in his/her HRMS account.',
  'Multiple MIS can be generated based on available data for monitoring the progress of APAR.',
]

const helpdeskItems = [
  'HRMS application related issue @ 778690452, 9971535534, 7982542883',
  'For OTP @ 7267910583, 9953780947',
  'For ePass related enquiry @ 9891643886, 9069161539, 9971168228',
  'Write to us at irhrms@cris.org.in',
]

const HumanResourceManagementSystem = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#071018] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_10%_-5%,rgba(34,211,238,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_95%_20%,rgba(56,189,248,0.10),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero */}
        <header className="mb-12 max-w-3xl animate-[fade-up_0.55s_ease-out]">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Establishment
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            HRMS
          </h1>
          <p className="mt-3 text-lg font-medium text-cyan-100/90 sm:text-xl">
            Human Resource Management System
          </p>
        </header>

        {/* Intro */}
        <section className="mb-12 space-y-4 animate-[fade-up_0.65s_ease-out]">
          {introParagraphs.map((text, i) => (
            <p
              key={i}
              className="border-l-2 border-cyan-400/40 pl-5 text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              {text}
            </p>
          ))}
        </section>

        {/* Registration */}
        <section className="mb-12 animate-[fade-up_0.7s_ease-out]">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <Laptop className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              AIMS HRMS Portal - Registration Process:
            </h2>
          </div>
          <ol className="grid gap-3 sm:grid-cols-3">
            {registrationSteps.map((text, i) => (
              <li
                key={i}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-cyan-500/[0.05]"
              >
                <span className="font-mono text-xs font-bold text-cyan-400">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Process roles */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
              <Users className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">Process:</h2>
          </div>
          <div className="space-y-3">
            {processRoles.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 font-mono text-xs font-bold text-cyan-300">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-cyan-200">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grievance process */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <Workflow className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">Grievance Process:</h2>
          </div>
          <ol className="relative space-y-0">
            {grievanceSteps.map((item, index) => (
              <li key={item.num} className="relative flex gap-5 pb-6 last:pb-0 sm:gap-6">
                {index < grievanceSteps.length - 1 ? (
                  <span
                    className="absolute left-[1.05rem] top-9 bottom-0 w-px bg-linear-to-b from-cyan-400/40 to-cyan-400/5 sm:left-[1.15rem]"
                    aria-hidden
                  />
                ) : null}
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/35 bg-[#071018] font-mono text-xs font-bold text-cyan-300 sm:h-9 sm:w-9">
                  {item.num}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
                  {item.subItems ? (
                    <ul className="mt-4 space-y-3">
                      {item.subItems.map((sub, j) => (
                        <li
                          key={j}
                          className="rounded-xl border border-cyan-400/15 bg-cyan-500/[0.06] px-4 py-3 text-sm leading-relaxed text-slate-300"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* IPAS + Salary */}
        <section className="mb-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <KeyRound className="h-5 w-5 text-cyan-300" strokeWidth={1.75} />
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">IPAS ID:</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              IPAS ID is our PF number or Employee number, which is available in the salary slip. It can also be asked from the Accounts Section. Enter your IPAS ID in the box and click on the &quot;Go&quot; button.
            </p>
          </div>
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-950/30 p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <Receipt className="h-5 w-5 text-cyan-300" strokeWidth={1.75} />
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">
                To get Salary Slip in HRMS:
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Click on the Pay Slip link and it will take you to the Pay Slip browser window. In the Pay Slip browser window we find the Year and Month dropdown menu, select the desired year and month, and click Submit. After submitting it will show you the Pay Slip row and click on View to take the Pay Slip printout.
            </p>
          </div>
        </section>

        {/* HRMS for Railway Employee */}
        <section className="mb-12">
          <div className="mb-8 rounded-3xl border border-cyan-400/25 bg-linear-to-br from-cyan-950/70 via-sky-950/40 to-transparent px-6 py-8 text-center sm:px-10">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              HRMS FOR RAILWAY EMPLOYEE
            </h2>
          </div>

          <div className="space-y-5">
            <article className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-cyan-200">
                <BookOpen className="h-4 w-4" />
                <h3 className="text-sm font-semibold sm:text-base">
                  HRMS Manuals and Guidelines for Indian Railway Employees:
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                Basic data entry of around 97% railway employees has been completed in Employee master and E-Service record modules of HRMS which had been launched last year.
              </p>
            </article>

            <article className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-cyan-200">
                <HelpCircle className="h-4 w-4" />
                <h3 className="text-sm font-semibold sm:text-base">Why HRMS for Railway Employees?</h3>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-slate-300">
                Human Resource Management System (HRMS) will allow Railway employees to view their details related to their Increments, Promotions, Awards, Transfers, Postings, Leave, Training, and composition of Family as per records and Nominations for retirement benefits. This information is not readily available to employee at present. It brings transparency to administration.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                HRMS Manuals and Guidelines are very helpful in understanding the use of HRMS portal.
              </p>
            </article>

            <article className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-cyan-200">
                <FileText className="h-4 w-4" />
                <h3 className="text-sm font-semibold sm:text-base">Guidelines for updating Executive SR:</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                Executive Record sheet is initiative to capture and display data related to service history of officers of Indian Railways. It has information about Basic details of Officers along with their educational qualification, experience, trainings, awards and publication.
              </p>
            </article>

            <article className="rounded-2xl border border-sky-400/20 bg-sky-950/25 p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-sky-200">
                <Shield className="h-4 w-4" />
                <h3 className="text-sm font-semibold sm:text-base">Guidelines for Settlement Module:</h3>
              </div>
              <div className="space-y-3">
                {settlementGuidelines.map((text, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-300">
                    {text}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Office Order features */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <ClipboardList className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Salient Features of Office Order Module:
            </h2>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {officeOrderFeatures.map((text, i) => (
              <li
                key={i}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-relaxed text-slate-300"
              >
                <span className="mb-2 block font-mono text-[11px] font-bold text-cyan-400/80">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {text}
              </li>
            ))}
          </ul>
        </section>

        {/* APAR module notes */}
        <section className="mb-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Guidelines for APAR Module:
          </h2>
          <div className="mt-5 space-y-3">
            <p className="text-sm leading-relaxed text-slate-300">
              APAR module on HRMS portal is applicable for only Non-Gazetted employees of Indian Railways.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Gazetted officers including Group-&apos;B&apos; officers have to fill their APAR on SPARROW website.
            </p>
          </div>
        </section>

        {/* E-APAR features */}
        <section className="mb-12">
          <h2 className="mb-6 font-serif text-2xl font-bold text-white sm:text-3xl">
            Salient Features of E-APAR Module:
          </h2>
          <ul className="space-y-3">
            {eAparFeatures.map((text, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 font-mono text-[11px] font-bold text-cyan-300">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-slate-300">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Login + Reset */}
        <section className="mb-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">
              How to Login on HRMS Railway Employee application?
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-sm leading-relaxed text-slate-300">
                If you are a first time User on HRMS Railway Employee portal, and don&apos;t know how to login on HRMS?
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                Then there is a simple step by step guide to Login on HRMS Railway Employee application.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-950/25 p-6">
            <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">
              How to Reset HRMS password?
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-sm leading-relaxed text-slate-300">
                If you are a Railway Employee and a registered user on HRMS portal of Indian Railways and suppose you have forgotten the password for it, then you no need to worry.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                HRMS Password can be easily reset by following simple steps.
              </p>
            </div>
          </div>
        </section>

        {/* Helpdesk */}
        <section className="rounded-3xl border border-cyan-400/25 bg-linear-to-br from-cyan-950/80 via-[#071018] to-sky-950/40 p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-200">
              <Phone className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">HRMS Helpdesk:</h2>
          </div>
          <p className="mb-5 text-sm leading-relaxed text-slate-300">
            In case of any issues please reach out to HRMS helpdesk:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {helpdeskItems.map((text, i) => (
              <li
                key={i}
                className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-sm leading-relaxed text-cyan-50"
              >
                {text}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default HumanResourceManagementSystem
