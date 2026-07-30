const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="container-narrow">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Harsh Deep Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
