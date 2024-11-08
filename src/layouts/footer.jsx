function Footer() {
  return (
    <>
      <footer className="py-12 bg-white xl:py-24 dark:bg-gray-800">
        <div className="container px-4 mx-auto xl:px-0">
          <hr className="my-8 border-gray-200 lg:my-12 dark:border-gray-700" />
          <span className="block text-center text-gray-600 dark:text-gray-400">
            © 2019-<span id="currentYear">2023</span>{" "}
            <a href="https://flowbite.com" target="_blank" rel="noreferrer">
              Flowbite
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
