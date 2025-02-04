interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`w-full py-4 text-center text-sm text-gray-500 ${className}`}>
      (Version 1.0)<br></br>
      This is a professional development learning project. For more information please contact the Learning Support Centre Product Development Lead (Pacific) at{' '}
      <a 
        href="mailto:joshua.hawthorne@ecn.forces.gc.ca"
        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
      >
        joshua.hawthorne@ecn.forces.gc.ca
      </a>
    </footer>
  );
}
