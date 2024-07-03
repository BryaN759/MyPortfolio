import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const ProblemSolving = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Problem Solving</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Easy</h3>
                            <span className="skills__level">22 Solved in LeetCode</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Medium</h3>
                            <span className="skills__level">25 Solved in LeetCode</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Hard</h3>
                            <span className="skills__level">3 Solved in LeetCode</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProblemSolving;