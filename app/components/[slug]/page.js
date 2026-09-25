import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  FileText,
  MessageCircle
} from 'lucide-react';

import { PageShell } from '../../site';
import { components } from '../../data/components';
import { CONTACT } from '../../config';


export default async function ComponentPage({ params }) {

  const { slug } = await params;


  // Find the component matching the URL.
  const component = components.find(
    (item) => item.slug === slug
  );


  // Show Next.js 404 if component doesn't exist.
  if (!component) {
    notFound();
  }


  // WhatsApp message for THIS product.
  const message =
    `Hello Metatrons, I would like to inquire about ${component.name}.`;


  // WhatsApp number is configured once in app/config.js.

  const whatsappNumber = CONTACT.whatsapp;


  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


  return (

    <PageShell>

      <main className="productPage">


        {/* BACK TO COMPONENTS */}

        <Link
          href="/components"
          className="backLink"
        >

          <ArrowLeft size={17} />

          Back to Components

        </Link>



        <div className="productLayout">


          {/* ================= IMAGE ================= */}

          <div className="productMainImage">

            <img
              src={component.image}
              alt={component.name}
            />

          </div>



          {/* ================= INFORMATION ================= */}

          <div className="productDetails">


            <span className="productCategory">
              {component.category}
            </span>


            <h1>
              {component.name}
            </h1>



            {/* AVAILABILITY */}

            <div className="productMeta">

              <div>

                <small>AVAILABILITY</small>

                <strong>
                  {component.availability}
                </strong>

              </div>


              <div>

                <small>PRICE</small>

                <strong>
                  {component.price}
                </strong>

              </div>

            </div>



            {/* DESCRIPTION */}

            <div className="productSection">

              <h2>Description</h2>

              <p>
                {component.description}
              </p>

            </div>



            {/* SPECIFICATIONS */}

            <div className="productSection">

              <h2>Specifications</h2>

              <ul>

                {component.specifications.map((spec) => (

                  <li key={spec}>
                    {spec}
                  </li>

                ))}

              </ul>

            </div>



            {/* DATASHEET */}

            {component.datasheet && (

              <a
                href={component.datasheet}
                target="_blank"
                className="datasheetButton"
              >

                <FileText size={18} />

                View Datasheet

              </a>

            )}



            {/* WHATSAPP */}

            <a
              href={whatsappURL}
              target="_blank"
              className="productInquiry"
            >

              <MessageCircle size={19} />

              Inquire on WhatsApp

            </a>


          </div>

        </div>

      </main>

    </PageShell>

  );
}