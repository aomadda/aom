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
    ];
  },
};

export default nextConfig;
