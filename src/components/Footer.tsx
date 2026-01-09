const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PM Portfolio. All rights reserved.</p>
          <p className="italic">
            "Let's build products that actually move the needle."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
