import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function QuickFilters() {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="bg-secondary/50 rounded-2xl p-6 md:p-8 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Find Your Perfect Program
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Degree Level */}
            <Select>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="Degree Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelor">Bachelor's</SelectItem>
                <SelectItem value="master">Master's</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
              </SelectContent>
            </Select>

            {/* Field of Study */}
            <Select>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="Field of Study" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="business">Business & Economics</SelectItem>
                <SelectItem value="medicine">Medicine & Health</SelectItem>
                <SelectItem value="arts">Arts & Humanities</SelectItem>
                <SelectItem value="science">Natural Sciences</SelectItem>
                <SelectItem value="law">Law</SelectItem>
              </SelectContent>
            </Select>

            {/* Language */}
            <Select>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>

            {/* Intake */}
            <Select>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="Intake" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fall-2026">Fall 2026</SelectItem>
                <SelectItem value="spring-2026">Spring 2026</SelectItem>
                <SelectItem value="fall-2027">Fall 2027</SelectItem>
              </SelectContent>
            </Select>

            {/* University */}
            <Select>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="University" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="polimi">Politecnico di Milano</SelectItem>
                <SelectItem value="unibo">University of Bologna</SelectItem>
                <SelectItem value="sapienza">Sapienza University</SelectItem>
                <SelectItem value="bocconi">Bocconi University</SelectItem>
                <SelectItem value="padua">University of Padua</SelectItem>
              </SelectContent>
            </Select>

            {/* Search Button */}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Search className="w-4 h-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
