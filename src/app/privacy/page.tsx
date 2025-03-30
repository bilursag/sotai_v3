import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/ui/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Política de Privacidad"
        description="Cómo recopilamos, utilizamos y protegemos su información"
        breadcrumbs={[{ title: "Política de Privacidad", href: "/privacy" }]}
      />

      <div className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="lead">
                Esta Política de Privacidad describe cómo Sotai ("nosotros", "nuestro", o "la empresa")
                recopila, utiliza y comparte información personal cuando usted utiliza nuestro sitio web
                (sotai-dev.com) y nuestros servicios.
              </p>

              <p>
                Última actualización: {new Date().toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>

              <h2>Información que recopilamos</h2>
              <p>
                Recopilamos información que usted nos proporciona directamente, como cuando:
              </p>
              <ul>
                <li>Completa un formulario de contacto o suscripción</li>
                <li>Solicita una cotización o consulta de servicio</li>
                <li>Se comunica con nosotros a través de correo electrónico u otros canales</li>
                <li>Contrata nuestros servicios</li>
              </ul>

              <p>
                Esta información puede incluir:
              </p>
              <ul>
                <li>Información de contacto (nombre, dirección de correo electrónico, número de teléfono)</li>
                <li>Información empresarial (nombre de la empresa, cargo)</li>
                <li>Detalles del proyecto o consulta</li>
                <li>Cualquier otra información que decida compartir con nosotros</li>
              </ul>

              <h3>Información recopilada automáticamente</h3>
              <p>
                Cuando visita nuestro sitio web, recopilamos automáticamente cierta información sobre su dispositivo y su interacción con nuestro sitio. Esto puede incluir:
              </p>
              <ul>
                <li>Datos de uso y navegación (páginas visitadas, tiempo de permanencia)</li>
                <li>Información del dispositivo (tipo de navegador, sistema operativo)</li>
                <li>Dirección IP y ubicación geográfica aproximada</li>
                <li>Datos de cookies y tecnologías similares</li>
              </ul>

              <h2>Cómo utilizamos su información</h2>
              <p>
                Utilizamos la información recopilada para:
              </p>
              <ul>
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Comunicarnos con usted sobre nuestros servicios</li>
                <li>Personalizar y mejorar su experiencia en nuestro sitio</li>
                <li>Analizar tendencias de uso y optimizar nuestro sitio web</li>
                <li>Prevenir actividades fraudulentas y mejorar la seguridad</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>

              <h2>Base legal para el procesamiento</h2>
              <p>
                Procesamos su información personal basándonos en una o más de las siguientes bases legales:
              </p>
              <ul>
                <li><strong>Consentimiento:</strong> Cuando nos ha otorgado su consentimiento para procesar sus datos con un fin específico.</li>
                <li><strong>Ejecución de un contrato:</strong> Cuando el procesamiento es necesario para cumplir con un contrato con usted.</li>
                <li><strong>Interés legítimo:</strong> Cuando el procesamiento es necesario para nuestros intereses legítimos y no prevalecen sus intereses o derechos fundamentales.</li>
                <li><strong>Obligación legal:</strong> Cuando el procesamiento es necesario para cumplir con una obligación legal.</li>
              </ul>

              <h2>Compartir su información</h2>
              <p>
                No vendemos, alquilamos ni comercializamos su información personal a terceros. Sin embargo, podemos compartir su información con:
              </p>
              <ul>
                <li><strong>Proveedores de servicios:</strong> Terceros que nos ayudan a operar nuestro negocio (alojamiento web, procesamiento de pagos, análisis).</li>
                <li><strong>Asesores profesionales:</strong> Como abogados, contadores o auditores cuando sea necesario.</li>
                <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos.</li>
                <li><strong>Socios comerciales:</strong> Con su consentimiento, cuando sea necesario para proporcionar servicios solicitados.</li>
              </ul>

              <h2>Seguridad de los datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger la información personal contra acceso no autorizado, destrucción o alteración. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.
              </p>

              <h2>Retención de datos</h2>
              <p>
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines para los que se recopiló, incluido el cumplimiento de requisitos legales, contables o de informes.
              </p>

              <h2>Sus derechos de privacidad</h2>
              <p>
                Dependiendo de su ubicación, puede tener ciertos derechos relacionados con su información personal, como:
              </p>
              <ul>
                <li>Derecho de acceso y obtención de una copia de sus datos personales</li>
                <li>Derecho de rectificación de datos inexactos</li>
                <li>Derecho de eliminación (el "derecho al olvido")</li>
                <li>Derecho a restringir el procesamiento</li>
                <li>Derecho a la portabilidad de los datos</li>
                <li>Derecho a oponerse al procesamiento</li>
                <li>Derecho a retirar el consentimiento</li>
              </ul>
              <p>
                Para ejercer estos derechos, por favor contáctenos a través de los medios proporcionados en la sección "Contáctenos".
              </p>

              <h2>Cookies y tecnologías similares</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar la experiencia de usuario, analizar el tráfico y personalizar el contenido. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.
              </p>
              <p>
                Tipos de cookies que utilizamos:
              </p>
              <ul>
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio.</li>
                <li><strong>Cookies analíticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.</li>
                <li><strong>Cookies de funcionalidad:</strong> Permiten funcionalidades mejoradas y personalización.</li>
                <li><strong>Cookies de terceros:</strong> Establecidas por servicios externos que utilizamos (como Google Analytics).</li>
              </ul>
              <p>
                Puede controlar las cookies a través de la configuración de su navegador. Sin embargo, tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio.
              </p>

              <h2>Uso de reCAPTCHA</h2>
              <p>
                Utilizamos el servicio reCAPTCHA de Google para proteger nuestros formularios contra spam y abuso. Este servicio puede recopilar información personal como direcciones IP y otros datos para determinar si las acciones en nuestro sitio son humanas o automatizadas.
              </p>
              <p>
                Al utilizar nuestros formularios, está aceptando la política de privacidad y términos de servicio de Google, disponibles en:
              </p>
              <ul>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidad de Google</a></li>
                <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Términos de Servicio de Google</a></li>
              </ul>

              <h2>Menores</h2>
              <p>
                Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos intencionalmente información personal de menores. Si cree que hemos recopilado información de un menor, por favor contáctenos para que podamos tomar las medidas apropiadas.
              </p>

              <h2>Enlaces a sitios de terceros</h2>
              <p>
                Nuestro sitio puede contener enlaces a sitios web o servicios de terceros. No somos responsables de las prácticas de privacidad de estos sitios y le recomendamos revisar sus políticas de privacidad antes de proporcionar cualquier información personal.
              </p>

              <h2>Cambios a esta política</h2>
              <p>
                Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras prácticas o por otros motivos operativos, legales o regulatorios. Le notificaremos cualquier cambio sustancial publicando la nueva política de privacidad en esta página y, cuando sea apropiado, mediante un aviso en nuestro sitio web.
              </p>

              <h2>Transferencias internacionales de datos</h2>
              <p>
                Su información puede ser transferida y procesada en países distintos a su país de residencia. Estos países pueden tener leyes de protección de datos diferentes. Al proporcionarnos su información, usted consiente estas transferencias. Tomaremos todas las medidas razonablemente necesarias para garantizar que sus datos sean tratados de forma segura y de acuerdo con esta política de privacidad.
              </p>

              <h2>Contáctenos</h2>
              <p>
                Si tiene preguntas, inquietudes o solicitudes relacionadas con esta política de privacidad o el tratamiento de sus datos personales, puede contactarnos a través de:
              </p>
              <ul>
                <li>Correo electrónico: <a href="mailto:contacto@sotai-dev.com">contacto@sotai-dev.com</a></li>
              </ul>
              <p>
                Responderemos a su solicitud dentro de los plazos establecidos por las leyes de protección de datos aplicables.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}