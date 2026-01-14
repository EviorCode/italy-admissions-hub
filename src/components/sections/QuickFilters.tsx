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
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-primary/5 via-white to-purple-50/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Find Your Perfect Program
          </h2>
          <p className="text-base text-muted-foreground">
            Search through hundreds of programs across Italian universities
          </p>
        </div>

        {/* Filters Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl -z-0" />

            <div className="relative z-10 p-8 md:p-10">
              {/* Main Filters Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
                {/* Degree Level */}
                <div>
                  <Select>
                    <SelectTrigger className="bg-white border-gray-300 hover:border-primary focus:border-primary transition-colors h-12 rounded-lg">
                      <SelectValue placeholder="Degree Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's</SelectItem>
                      <SelectItem value="master">Master's</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Field of Study */}
                <div>
                  <Select>
                    <SelectTrigger className="bg-white border-gray-300 hover:border-primary focus:border-primary transition-colors h-12 rounded-lg">
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
                </div>

                {/* Language */}
                <div>
                  <Select>
                    <SelectTrigger className="bg-white border-gray-300 hover:border-primary focus:border-primary transition-colors h-12 rounded-lg">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="italian">Italian</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Intake */}
                <div>
                  <Select>
                    <SelectTrigger className="bg-white border-gray-300 hover:border-primary focus:border-primary transition-colors h-12 rounded-lg">
                      <SelectValue placeholder="Intake" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fall-2026">Fall 2026</SelectItem>
                      <SelectItem value="spring-2026">Spring 2026</SelectItem>
                      <SelectItem value="fall-2027">Fall 2027</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Button */}
                <div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>

              {/* University Filter - Full Width */}
              <div className="mb-8">
                <Select>
                  <SelectTrigger className="bg-white border-gray-300 hover:border-primary focus:border-primary transition-colors h-12 rounded-lg">
                    <SelectValue placeholder="Select University (Optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="polimi">Politecnico di Milano</SelectItem>
                    <SelectItem value="unibo">University of Bologna</SelectItem>
                    <SelectItem value="sapienza">Sapienza University</SelectItem>
                    <SelectItem value="bocconi">Bocconi University</SelectItem>
                    <SelectItem value="padua">University of Padua</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Popular Searches */}
              <div className="pt-6 border-t border-gray-300">
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-primary/10 hover:text-primary border border-gray-300 hover:border-primary/30 rounded-lg transition-all">
                    Engineering in Milan
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-primary/10 hover:text-primary border border-gray-300 hover:border-primary/30 rounded-lg transition-all">
                    English Master's
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-primary/10 hover:text-primary border border-gray-300 hover:border-primary/30 rounded-lg transition-all">
                    Business Programs
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-primary/10 hover:text-primary border border-gray-300 hover:border-primary/30 rounded-lg transition-all">
                    Fall 2026 Intake
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
