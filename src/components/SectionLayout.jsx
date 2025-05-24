import React from 'react';

const SectionLayout = ({ children }) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionLayout; 