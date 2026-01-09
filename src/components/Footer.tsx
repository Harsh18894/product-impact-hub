const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Harsh Deep Singh. All rights reserved.</p>
          <p className="italic">
            "Let's build products that actually deliver measurable impact."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
