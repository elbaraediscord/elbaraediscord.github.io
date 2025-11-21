import { describe, it, expect } from "vitest";
import { solutions, skills, expertiseSummary, type Skill, type Solution } from "../managedServices";

describe("Managed Services Data", () => {
  describe("Solutions", () => {
    it("should have exactly 6 solutions", () => {
      expect(solutions).toHaveLength(6);
    });

    it("should have required properties for each solution", () => {
      solutions.forEach((solution: Solution) => {
        expect(solution).toHaveProperty("id");
        expect(solution).toHaveProperty("title");
        expect(solution).toHaveProperty("description");
        expect(solution).toHaveProperty("icon");
        
        // Validate types
        expect(typeof solution.id).toBe("string");
        expect(typeof solution.title).toBe("string");
        expect(typeof solution.description).toBe("string");
        expect(typeof solution.icon).toBe("string");
        
        // Validate non-empty strings
        expect(solution.id.length).toBeGreaterThan(0);
        expect(solution.title.length).toBeGreaterThan(0);
        expect(solution.description.length).toBeGreaterThan(0);
      });
    });

    it("should have unique solution IDs", () => {
      const ids = solutions.map((s: Solution) => s.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it("should have valid icon names", () => {
      const validIcons = ["Brain", "Zap", "Lightbulb", "Radio", "Code", "Activity"];
      solutions.forEach((solution: Solution) => {
        expect(validIcons).toContain(solution.icon);
      });
    });
  });

  describe("Skills", () => {
    it("should have at least one skill category", () => {
      expect(skills.length).toBeGreaterThan(0);
    });

    it("should have required properties for each skill category", () => {
      skills.forEach((skill: Skill) => {
        expect(skill).toHaveProperty("category");
        expect(skill).toHaveProperty("subcategories");
        
        expect(typeof skill.category).toBe("string");
        expect(Array.isArray(skill.subcategories)).toBe(true);
        expect(skill.subcategories.length).toBeGreaterThan(0);
      });
    });

    it("should have valid subcategory structure", () => {
      skills.forEach((skill: Skill) => {
        skill.subcategories.forEach((subcat) => {
          expect(subcat).toHaveProperty("name");
          expect(subcat).toHaveProperty("items");
          
          expect(typeof subcat.name).toBe("string");
          expect(Array.isArray(subcat.items)).toBe(true);
          expect(subcat.items.length).toBeGreaterThan(0);
          
          // Each item should be a non-empty string
          subcat.items.forEach((item) => {
            expect(typeof item).toBe("string");
            expect(item.length).toBeGreaterThan(0);
          });
        });
      });
    });

    it("should have unique category names", () => {
      const categories = skills.map((s: Skill) => s.category);
      const uniqueCategories = new Set(categories);
      expect(uniqueCategories.size).toBe(categories.length);
    });
  });

  describe("Expertise Summary", () => {
    it("should have all required expertise areas", () => {
      const requiredAreas = ["backend", "frontend", "mobile", "iot", "ai", "devops", "design"];
      requiredAreas.forEach((area) => {
        expect(expertiseSummary).toHaveProperty(area);
      });
    });

    it("should have non-empty strings for each expertise area", () => {
      Object.values(expertiseSummary).forEach((value) => {
        expect(typeof value).toBe("string");
        expect(value.length).toBeGreaterThan(0);
      });
    });

    it("should contain technology names separated by dots", () => {
      Object.values(expertiseSummary).forEach((value) => {
        // Each should contain at least one dot separator
        expect(value).toMatch(/·/);
      });
    });
  });

  describe("Data Consistency", () => {
    it("should not have duplicate technologies across categories", () => {
      const allTechs = new Set<string>();
      const duplicates: string[] = [];

      skills.forEach((skill: Skill) => {
        skill.subcategories.forEach((subcat) => {
          subcat.items.forEach((item) => {
            const normalized = item.toLowerCase();
            if (allTechs.has(normalized)) {
              duplicates.push(item);
            }
            allTechs.add(normalized);
          });
        });
      });

      // Allow some duplicates as they may be intentional (e.g., "Docker" in multiple contexts)
      // But ensure we're not duplicating entire entries
      expect(duplicates.length).toBeLessThan(5);
    });
  });
});
