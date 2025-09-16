const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-row justify-between items-center ">
     
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Bhuvnesh Shaily. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
