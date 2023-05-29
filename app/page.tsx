import Contact from "@/components/Contact/Contact";
import Menu from "@/components/Menu/Menu";
import PageWrapper from "@/components/PageWrapper";

export default function Index() {
  return (
    <PageWrapper>
      <Menu />
      <p className="uppercase md:text-2xl row-start-4 selection:bg-black col-span-4">
        LOOKING FOR A <strong>WEB DEVELOPER?</strong>
        <br />
        <br />
        LOOK NO MORE! GET A WEBSITE THAT
        <br />
        REFLECTS <strong>YOUR BRAND PERSONALITY</strong> AND ALSO
        <br />
        CONVERTS POTENTIAL CUSTOMERS INTO <strong>CUSTOMERS.</strong>
      </p>
      <span className="row-start-6 md:text-8xl xl:text-9xl font-black col-span-4 whitespace-nowrap">
        ARYAN SHAILY
      </span>
      <Contact />
    </PageWrapper>
  );
}
