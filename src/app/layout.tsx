
import TitleSetter from "@/components/title";
import "@/styles/index.scss";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/assets/img/icon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <title>{} | HakamTechSol</title>
      </head>

      <body>
        <TitleSetter />{children}
      </body>
    </html>
  );
}
