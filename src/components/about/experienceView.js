import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export default function ExperienceView() {
    const data = useStaticQuery(graphql`
    {
        allExperienceJson {
            edges {
                node {
                    type
                    position
                    place
                    start_date
                    end_date
                    description
                    grades
                }
            }
        }
      }      
    `)

    const experiences = data.allExperienceJson.edges;
    
    return (
        <div>
            {experiences.map(({node: experience}) => {
                const type = experience.type;
                const position = experience.position;
                const place = experience.place;
                const startDate = experience.start_date;
                const endDate = experience.end_date;
                const description = experience.description;
                const grades = experience.grades

                return (
                    <li className={"experience " + type }>
                        <small id="type">{type}</small>
                        <small id="date">{startDate} - {endDate}</small>
                        <h1>{position}</h1>    
                        <h2>{place}</h2>
                        <div className={"details " + type}>
                            { type === "employment" ? "" : grades.map(grade => <p id="grades">{grade}</p>) }
                            <p>{description}</p>
                        </div>
                    </li>
                )
            })}
        </div>
    )
}
