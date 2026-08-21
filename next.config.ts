import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/quizzes/establishment-rules/apar",
        destination: "/quizzes/establishment-rules/annual-performance-appraisal-report",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/cga",
        destination: "/quizzes/establishment-rules/compassionate-grounds-appointment",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/cpc",
        destination: "/quizzes/establishment-rules/central-pay-commission",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/conduct-rules",
        destination: "/quizzes/establishment-rules/railway-services-conduct-rules-1966",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/discipline-appeal-rules",
        destination: "/quizzes/establishment-rules/railway-servants-discipline-appeal-rules-1968",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/hrms",
        destination: "/quizzes/establishment-rules/human-resource-management-system",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/leave-rules",
        destination: "/quizzes/establishment-rules/railway-servants-leave-rules-1949",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/lhb",
        destination: "/quizzes/establishment-rules/linke-holfmann-busch",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/nps",
        destination: "/quizzes/establishment-rules/national-pension-system",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/ops",
        destination: "/quizzes/establishment-rules/old-pension-system",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/pass-rules",
        destination: "/quizzes/establishment-rules/railway-servants-pass-rules-1986",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/rest-rules",
        destination: "/quizzes/establishment-rules/railway-servants-rest-rules-2005",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/rti-act-2005",
        destination: "/quizzes/establishment-rules/right-to-information-act-2005",
        permanent: true,
      },
      {
        source: "/quizzes/establishment-rules/ups",
        destination: "/quizzes/establishment-rules/unified-pension-system",
        permanent: true,
      },
      {
        source: "/topics/chief-controller",
        destination: "/topics/aom-special",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/distances",
        destination: "/topics/aom-special/distance-wise",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/general-rules",
        destination: "/topics/aom-special/general-rules-all",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/gsr-appendix",
        destination: "/topics/aom-special/general-subsidiary-rules-appendix",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/gsr-chapters",
        destination: "/topics/aom-special/general-subsidiary-rules-chapters",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/numbers",
        destination: "/topics/aom-special/numbers-wise",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/percentages",
        destination: "/topics/aom-special/percentage-wise",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/permissions",
        destination: "/topics/aom-special/permissions-authorisation",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/railways-act-1989-all-chapters",
        destination: "/topics/aom-special/indian-railway-act-1989-all-acts",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/railway-conduct-rules-1966-all-rules",
        destination: "/topics/aom-special/railway-services-conduct-rules-1966-all-rules",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/railway-da-rules-1968-all-chapters",
        destination: "/topics/aom-special/railway-servants-discipline-appeal-rules-1968-all-rules",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/railway-leave-rules-1949-all-rules",
        destination: "/topics/aom-special/railway-servants-leave-rules-1949-all-rules",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/railway-rest-rules-2005-all-rules",
        destination: "/topics/aom-special/railway-servants-rest-rules-2005-all-rules",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/speed-restrictions",
        destination: "/topics/aom-special/speed-restrictions",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/standard-forms",
        destination: "/topics/aom-special/standard-forms",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/swr-appendix",
        destination: "/topics/aom-special/station-working-rules-appendix",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/swr-chapters",
        destination: "/topics/aom-special/station-working-rules-chapters",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/timings",
        destination: "/topics/aom-special/timings-wise",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/content/years",
        destination: "/topics/aom-special/years-wise",
        permanent: true,
      },
      {
        source: "/topics/chief-controller/:path*",
        destination: "/topics/aom-special",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
