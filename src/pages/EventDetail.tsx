import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Trophy, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParticleField from "@/components/ParticleField";
import AnimatedBlobs from "@/components/AnimatedBlobs";
import ScrollProgress from "@/components/ScrollProgress";
import { events } from "@/lib/eventData";

const EventDetail = () => {
  const { eventSlug } = useParams();
  const event = events.find((item) => item.slug === eventSlug);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background scanline-overlay">
        <ParticleField />
        <AnimatedBlobs />
        <ScrollProgress />
        <Navbar />

        <section className="relative min-h-[60vh] flex items-center justify-center pt-16">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-sm text-primary uppercase tracking-[0.3em] mb-4"
            >
              <Link
                to="/events"
                className="text-primary/80 hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} /> Back to events
              </Link>
            </motion.div>

            {event ? (
              <>
                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="font-heading text-5xl md:text-6xl font-bold mb-4"
                >
                  {event.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="max-w-3xl mx-auto text-muted-foreground"
                >
                  {event.description}
                </motion.p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="font-heading text-4xl font-bold text-foreground">
                  Event not found
                </h1>
                <p className="text-muted-foreground">
                  The event you are looking for does not exist. Please return to
                  the events list.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {event && (
          <section className="section-padding">
            <div className="container mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="glass-card bg-card/80 backdrop-blur-2xl p-8 overflow-hidden shimmer-card animated-border-glow">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                      <event.icon size={32} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-primary uppercase tracking-[0.35em] mb-2">
                        {event.duration} • {event.teamSize}
                      </p>
                      <h2 className="font-heading text-3xl font-bold text-foreground">
                        {event.title}
                      </h2>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl bg-muted/10 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Prize</p>
                      <p className="text-xl font-semibold text-foreground">{event.prize}</p>
                    </div>
                    <div className="rounded-3xl bg-muted/10 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Team Size</p>
                      <p className="text-xl font-semibold text-foreground">{event.teamSize}</p>
                    </div>
                    <div className="rounded-3xl bg-muted/10 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Duration</p>
                      <p className="text-xl font-semibold text-foreground">{event.duration}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-primary mb-2">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.overview}</p>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-3xl bg-muted/10 p-6">
                        <h4 className="font-heading text-sm font-semibold text-primary mb-3">Rules</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {event.rules.map((rule, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary mt-1">▸</span>
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-3xl bg-muted/10 p-6">
                        <h4 className="font-heading text-sm font-semibold text-primary mb-3">Judging Criteria</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {event.criteria.map((criteria, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-neon-cyan mt-1">◆</span>
                              <span>{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link to="/contact" className="glow-button inline-flex items-center gap-2 !px-6 !py-3 text-sm">
                      Register Now <ArrowRight size={14} />
                    </Link>
                    <Link to="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      View all events
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-card/80 p-8 backdrop-blur-2xl border border-white/10">
                <div className="space-y-6">
                  <div className="rounded-3xl bg-muted/10 p-6">
                    <div className="flex items-center gap-2 text-primary text-sm uppercase tracking-[0.28em] mb-4">
                      <Trophy size={16} /> Event Highlights
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      This event is designed to push teams beyond the ordinary. Expect fast-paced challenges, rigorous judging, and unforgettable learning.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-muted/10 p-6">
                    <div className="flex items-center gap-2 text-neon-cyan text-sm uppercase tracking-[0.28em] mb-4">
                      <Clock size={16} /> Schedule
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      The event runs according to the schedule posted on the main schedule page. Be sure to arrive early and register in time.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-muted/10 p-6">
                    <div className="flex items-center gap-2 text-secondary text-sm uppercase tracking-[0.28em] mb-4">
                      <Users size={16} /> Participation
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Participants should prepare their strategy and materials ahead of time. Teams are expected to follow the event rules closely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </PageTransition>
  );
};

export default EventDetail;
