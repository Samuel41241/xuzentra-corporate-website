import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    department: "All",
    location: "All",
    employmentType: "All",
  });

  useEffect(() => {
    async function loadJobs() {
      const { data, error } = await supabase
        .from("job_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (!error) {
        setJobs(data || []);
      }

      setLoading(false);
    }

    loadJobs();
  }, []);

  const departments = useMemo(() => {
    return ["All", ...new Set(jobs.map((job) => job.department))];
  }, [jobs]);

  const locations = useMemo(() => {
    return ["All", ...new Set(jobs.map((job) => job.location))];
  }, [jobs]);

  const employmentTypes = useMemo(() => {
    return ["All", ...new Set(jobs.map((job) => job.employment_type))];
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const departmentMatch =
        filters.department === "All" || job.department === filters.department;
      const locationMatch =
        filters.location === "All" || job.location === filters.location;
      const typeMatch =
        filters.employmentType === "All" ||
        job.employment_type === filters.employmentType;

      return departmentMatch && locationMatch && typeMatch;
    });
  }, [jobs, filters]);

  return (
    <section className="page-section">
      <div className="container">
        <div className="careers-hero">
          <p className="eyebrow">Careers</p>
          <h1>Build with Xuzentra</h1>
          <p>
            Explore opportunities to work with Xuzentra Technologies Limited
            across product, operations, technology, growth, and sector-focused
            innovation.
          </p>
        </div>

        <div className="job-filters">
          <select
            value={filters.department}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, department: e.target.value }))
            }
          >
            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={filters.location}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, location: e.target.value }))
            }
          >
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={filters.employmentType}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                employmentType: e.target.value,
              }))
            }
          >
            {employmentTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="page-placeholder">
            <p>Loading opportunities...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="page-placeholder">
            <h2>No open roles right now</h2>
            <p>Please check back later for new opportunities.</p>
          </div>
        ) : (
          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <article key={job.id} className="job-card">
                <div className="job-card-top">
                  <div>
                    <p className="page-mini-label">{job.department}</p>
                    <h3>{job.title}</h3>
                  </div>
                  <span className="status-pill status-published">
                    {job.employment_type}
                  </span>
                </div>

                <p>{job.summary}</p>

                <div className="job-meta-row">
                  <span>{job.location}</span>
                  <span>{job.work_mode}</span>
                </div>

                <Link to={`/careers/${job.slug}`} className="btn btn-primary">
                  View Role
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Careers;