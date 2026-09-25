'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

import { PageShell, PageHero, WhatsAppCTA1 } from '../site';
import { components } from '../data/components';


export default function ComponentsPage() {

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');


  // Automatically create categories from your products.
  const categories = [
    'All',
    ...new Set(components.map((component) => component.category))
  ];


  // Search + category filtering.
  const filteredComponents = components.filter((component) => {

    const matchesSearch =
      component.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === 'All' ||
      component.category === category;

    return matchesSearch && matchesCategory;
  });


  return (

    <PageShell>

      <PageHero
        kicker="COMPONENTS"
        title="Electronic components for"
        accent="your next build."
      >
        Browse our collection of sensors, modules,
        development boards and electronic components.
      </PageHero>


      <section className="catalogue pageSection">


        {/* ================= SEARCH ================= */}

        <div className="catalogueSearch">

          <Search size={20} />

          <input
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>



        {/* ================= CATEGORIES ================= */}

        <div className="categoryFilters">

          {categories.map((item) => (

            <button
              key={item}

              className={
                category === item
                  ? 'categoryButton active'
                  : 'categoryButton'
              }

              onClick={() => setCategory(item)}
            >

              {item}

            </button>

          ))}

        </div>



        {/* ================= PRODUCT COUNT ================= */}

        <div className="catalogueCount">

          {filteredComponents.length} component
          {filteredComponents.length !== 1 ? 's' : ''}

        </div>

        <p className="cataloguePriceNote">
          Prices and availability may change. Please confirm through inquiry before purchase.
        </p>



        {/* ================= COMPONENT GRID ================= */}

        <div className="catalogueGrid">

          {filteredComponents.map((component) => (

            <Link
              href={`/components/${component.slug}`}
              className="catalogueCard"
              key={component.slug}
            >

              <div className="catalogueImage">

                <img
                  src={component.image}
                  alt={component.name}
                />

              </div>


              <div className="catalogueName">

                {component.name}

              </div>

            </Link>

          ))}

        </div>



        {/* ================= NO RESULTS ================= */}

        {filteredComponents.length === 0 && (

          <div className="noProducts">

            <h3>No components found</h3>

            <p>
              Try another search or category.
            </p>

          </div>

        )}


      </section>

    <WhatsAppCTA1 title="Is what you're looking for not listed above?" />
    
    </PageShell>

  );
}