import { NextRequest, NextResponse } from 'next/server';
import { pollOptions } from '@/data/sampleData';

// In-memory storage for poll results (in production, use a database)
let pollResults = [...pollOptions];

export async function GET(request: NextRequest) {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const totalVotes = pollResults.reduce((sum, option) => sum + option.count, 0);
    
    const resultsWithPercentage = pollResults.map(option => ({
      ...option,
      percentage: totalVotes > 0 ? Math.round((option.count / totalVotes) * 100) : 0
    }));

    return NextResponse.json({
      success: true,
      data: {
        options: resultsWithPercentage,
        totalVotes
      },
      message: 'Poll results retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching poll results:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch poll results',
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { selectedOption } = body;

    // Validate input
    if (!selectedOption) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing selected option',
          message: 'Please select an option to vote'
        },
        { status: 400 }
      );
    }

    // Find the selected option
    const optionIndex = pollResults.findIndex(option => option.value === selectedOption);
    
    if (optionIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid option',
          message: 'Selected option does not exist'
        },
        { status: 400 }
      );
    }

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Update vote count
    pollResults[optionIndex].count += 1;

    // Calculate updated results
    const totalVotes = pollResults.reduce((sum, option) => sum + option.count, 0);
    const resultsWithPercentage = pollResults.map(option => ({
      ...option,
      percentage: totalVotes > 0 ? Math.round((option.count / totalVotes) * 100) : 0
    }));

    return NextResponse.json({
      success: true,
      data: {
        options: resultsWithPercentage,
        totalVotes,
        votedOption: selectedOption
      },
      message: 'Vote submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting vote:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit vote',
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Reset poll results
    pollResults = pollOptions.map(option => ({ ...option, count: 0 }));

    return NextResponse.json({
      success: true,
      data: {
        options: pollResults,
        totalVotes: 0
      },
      message: 'Poll results reset successfully'
    });
  } catch (error) {
    console.error('Error resetting poll:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to reset poll',
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}
